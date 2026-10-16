<#
.SYNOPSIS
    Proves on real Windows that the computer-use client's Authenticode check
    runs — and that the form it replaced never could.

.DESCRIPTION
    `verifyAuthenticodeSigner` shells PowerShell to read an image's signature.
    It used to pass the image path as `-EncodedCommand <b64> -args <path>`.
    `-args` is documented only for the `{ ScriptBlock }` form of `-Command`, and
    measured on Windows PowerShell 5.1.26100.8875 the switch is not merely
    ignored: powershell.exe refuses the command line outright with "Cannot
    process command because a command is already specified with -Command or
    -EncodedCommand.", writes its usage banner to stdout, and exits 0xFFFD0000.
    The encoded script never executes at all. That was confirmed by making a
    marker write the script's first statement and observing that the marker is
    never created.

    Had the switch merely been ignored, the script would instead have run with
    an empty `$args`, read `$null`, and `Get-AuthenticodeSignature` would have
    thrown under `$ErrorActionPreference = "Stop"`. That arm was measured too,
    for contrast, and exits 1 with `$args.Count` of 0.

    Both routes leave the client with a non-zero exit and non-JSON stdout, so
    every verdict came back `unverifiable` — which derives policy `audit`, so
    signer pinning would never have enforced even after the sidecar is signed.
    A control that fails open while appearing to function.

    The client now passes the path in `CURSOR_CUA_SIGNER_TARGET`. That is
    covered by unit tests off Windows, but only in the sense that the client
    builds the argument vector it intends to. Whether PowerShell then behaves
    as documented is not something a Linux CI host can answer. This script
    answers it, by running both forms against the same images and comparing.

    The shipped script also reads the signer's common name through
    `GetNameInfo(SimpleName)` rather than out of `Subject`. `Subject` is
    CertNameToStr output, which quotes any value containing a comma —
    `CN="Anysphere, Inc."` — and the regex that used to parse it kept the
    quotes, so the pinned signer never matched and every shipped Cursor
    derived `audit`. Check 2b proves the bare value comes back unquoted.

    Self-contained on purpose: no repo checkout, no Node, no network. The
    script text below is pinned byte-for-byte against the shipped
    `authenticodeInvocation` by a unit test, so this cannot drift into
    validating something the client does not send.

.PARAMETER SignedImage
    An Authenticode-signed binary. Defaults to in-box PowerShell, which is
    signed by Microsoft on any stock install.

.PARAMETER UnsignedImage
    An unsigned binary. Defaults to a temporary file this script creates, so
    the `NotSigned` arm works on a machine with nothing else handy.

.EXAMPLE
    powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\verify-authenticode-invocation.ps1

.OUTPUTS
    A PASS/FAIL line per check and exit code 0 only when all of them pass.
#>
[CmdletBinding()]
param(
    [string]$SignedImage,
    [string]$UnsignedImage
)

$ErrorActionPreference = 'Stop'

# The exact script the client sends. Pinned against
# `authenticodeInvocation` in signer.test.ts — edit both or neither.
# --- BEGIN SHIPPED SCRIPT ---
$shippedScript = @'
$ErrorActionPreference = "Stop"
$target = $env:CURSOR_CUA_SIGNER_TARGET
if ([string]::IsNullOrEmpty($target)) { throw "no signer target" }
$signature = Get-AuthenticodeSignature -LiteralPath $target
$subject = ""
$commonName = ""
if ($signature.SignerCertificate) {
  $subject = $signature.SignerCertificate.Subject
  $commonName = $signature.SignerCertificate.GetNameInfo([System.Security.Cryptography.X509Certificates.X509NameType]::SimpleName, $false)
}
[Console]::Out.Write((ConvertTo-Json -Compress ([ordered]@{
  status = $signature.Status.ToString()
  subject = $subject
  commonName = $commonName
  message = $signature.StatusMessage
})))
'@
# --- END SHIPPED SCRIPT ---

# The form this replaced, reproduced so the failure is demonstrated rather
# than asserted from documentation.
# --- BEGIN BROKEN SCRIPT ---
$brokenScript = @'
$ErrorActionPreference = "Stop"
$target = $args[0]
$signature = Get-AuthenticodeSignature -LiteralPath $target
$subject = ""
if ($signature.SignerCertificate) { $subject = $signature.SignerCertificate.Subject }
[Console]::Out.Write((ConvertTo-Json -Compress ([ordered]@{
  status = $signature.Status.ToString()
  subject = $subject
  message = $signature.StatusMessage
})))
'@
# --- END BROKEN SCRIPT ---

$script:failures = 0

function Write-Result {
    param([string]$Name, [bool]$Ok, [string]$Detail)
    if ($Ok) {
        Write-Host "PASS  $Name" -ForegroundColor Green
    } else {
        Write-Host "FAIL  $Name" -ForegroundColor Red
        $script:failures++
    }
    if ($Detail) {
        foreach ($line in ($Detail -split '\r?\n')) {
            Write-Host "        $line"
        }
    }
}

function Get-Field {
    param($Verdict, [string]$Name)
    if ($null -eq $Verdict) { return '<no verdict>' }
    return $Verdict.$Name
}

<#
    Run powershell.exe exactly as the client's `execFile` would: same
    switches, same encoding, stdout and stderr captured separately.
#>
function Invoke-Arm {
    param(
        [Parameter(Mandatory)][string]$Script,
        [string[]]$ExtraArguments = @(),
        [string]$TargetEnvironmentValue
    )
    $encoded = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($Script))
    $arguments = @(
        '-NoProfile'
        '-NonInteractive'
        '-ExecutionPolicy'
        'Bypass'
        '-EncodedCommand'
        $encoded
    ) + $ExtraArguments

    $previous = $env:CURSOR_CUA_SIGNER_TARGET
    $outFile = [IO.Path]::GetTempFileName()
    $errFile = [IO.Path]::GetTempFileName()
    try {
        if ($PSBoundParameters.ContainsKey('TargetEnvironmentValue')) {
            $env:CURSOR_CUA_SIGNER_TARGET = $TargetEnvironmentValue
        } else {
            Remove-Item Env:\CURSOR_CUA_SIGNER_TARGET -ErrorAction SilentlyContinue
        }
        $process = Start-Process -FilePath 'powershell.exe' `
            -ArgumentList $arguments `
            -NoNewWindow -Wait -PassThru `
            -RedirectStandardOutput $outFile `
            -RedirectStandardError $errFile
        return [pscustomobject]@{
            ExitCode = $process.ExitCode
            Stdout   = (Get-Content -Raw -LiteralPath $outFile -ErrorAction SilentlyContinue)
            Stderr   = (Get-Content -Raw -LiteralPath $errFile -ErrorAction SilentlyContinue)
        }
    } finally {
        if ($null -eq $previous) {
            Remove-Item Env:\CURSOR_CUA_SIGNER_TARGET -ErrorAction SilentlyContinue
        } else {
            $env:CURSOR_CUA_SIGNER_TARGET = $previous
        }
        Remove-Item -LiteralPath $outFile, $errFile -ErrorAction SilentlyContinue
    }
}

# The client treats any non-JSON stdout or any non-zero exit as
# `unverifiable`, so that is what "did the check run" means here.
function Get-Verdict {
    param($Arm)
    if ($Arm.ExitCode -ne 0) {
        return $null
    }
    if ([string]::IsNullOrWhiteSpace($Arm.Stdout)) {
        return $null
    }
    try {
        return $Arm.Stdout | ConvertFrom-Json
    } catch {
        return $null
    }
}

if (-not $SignedImage) {
    $SignedImage = Join-Path $env:SystemRoot 'System32\WindowsPowerShell\v1.0\powershell.exe'
}
$temporaryUnsigned = $null
if (-not $UnsignedImage) {
    $temporaryUnsigned = Join-Path ([IO.Path]::GetTempPath()) "cua-unsigned-$([guid]::NewGuid()).ps1"
    Set-Content -LiteralPath $temporaryUnsigned -Value '# unsigned sample' -Encoding ASCII
    $UnsignedImage = $temporaryUnsigned
}

Write-Host ''
Write-Host 'Authenticode invocation check' -ForegroundColor Cyan
Write-Host "  signed image:   $SignedImage"
Write-Host "  unsigned image: $UnsignedImage"
Write-Host "  host:           $($PSVersionTable.PSVersion) on $([Environment]::OSVersion.VersionString)"
Write-Host ''

try {
    # 1. The bug. If this arm produces a usable verdict, the premise of the
    #    fix is wrong and the change should be revisited rather than trusted.
    $broken = Invoke-Arm -Script $brokenScript -ExtraArguments @('-args', $SignedImage)
    $brokenVerdict = Get-Verdict $broken
    Write-Result -Name '-args does not reach an -EncodedCommand script (the bug)' `
        -Ok ($null -eq $brokenVerdict) `
        -Detail "exit=$($broken.ExitCode) stdout=$($broken.Stdout) stderr=$($broken.Stderr)"

    # 2. The fix, on a signed binary. This is the arm that was never reachable.
    $signed = Invoke-Arm -Script $shippedScript -TargetEnvironmentValue $SignedImage
    $signedVerdict = Get-Verdict $signed
    Write-Result -Name 'shipped invocation returns a real verdict for a signed image' `
        -Ok ($null -ne $signedVerdict -and $signedVerdict.status -eq 'Valid' -and $signedVerdict.subject) `
        -Detail "exit=$($signed.ExitCode) status=$(Get-Field $signedVerdict 'status') subject=$(Get-Field $signedVerdict 'subject')"

    # 2b. The pin reads `commonName`, not `subject`. `Subject` is CertNameToStr
    #     output, which quotes a value containing a comma (`CN="Anysphere, Inc."`)
    #     — the quotes are what defeated the old regex. GetNameInfo(SimpleName)
    #     must hand back the bare RDN value, never a quoted one.
    $signedCommonName = [string](Get-Field $signedVerdict 'commonName')
    Write-Result -Name 'commonName is the bare RDN value, without CertNameToStr quoting' `
        -Ok ($signedCommonName -and -not $signedCommonName.StartsWith('"') -and $signedVerdict.subject -match ('CN="?' + [regex]::Escape($signedCommonName))) `
        -Detail "commonName=$signedCommonName"

    # 3. An unsigned image must be distinguishable from a failed check. Both
    #    used to look the same, which is how the bug stayed invisible.
    $unsigned = Invoke-Arm -Script $shippedScript -TargetEnvironmentValue $UnsignedImage
    $unsignedVerdict = Get-Verdict $unsigned
    Write-Result -Name 'unsigned image reports NotSigned, not a failed check' `
        -Ok ($null -ne $unsignedVerdict -and $unsignedVerdict.status -ne 'Valid') `
        -Detail "exit=$($unsigned.ExitCode) status=$(Get-Field $unsignedVerdict 'status')"

    # 4. A missing target must fail loudly rather than reproduce the silent
    #    `unverifiable` the -args bug produced.
    $missing = Invoke-Arm -Script $shippedScript
    Write-Result -Name 'missing target throws instead of abstaining silently' `
        -Ok ($missing.ExitCode -ne 0 -or ($missing.Stderr -and $missing.Stderr -match 'no signer target')) `
        -Detail "exit=$($missing.ExitCode) stderr=$($missing.Stderr)"

    # 5. The property that made the path an argument rather than interpolated
    #    text in the first place. The environment must keep it.
    $marker = Join-Path ([IO.Path]::GetTempPath()) "cua-injection-$([guid]::NewGuid()).txt"
    $hostile = "C:\nope`$(Set-Content -LiteralPath '$marker' -Value pwned).exe"
    $injected = Invoke-Arm -Script $shippedScript -TargetEnvironmentValue $hostile
    Write-Result -Name 'a hostile path is data, not code' `
        -Ok (-not (Test-Path -LiteralPath $marker)) `
        -Detail "exit=$($injected.ExitCode) marker_written=$(Test-Path -LiteralPath $marker)"
    Remove-Item -LiteralPath $marker -ErrorAction SilentlyContinue
} finally {
    if ($temporaryUnsigned) {
        Remove-Item -LiteralPath $temporaryUnsigned -ErrorAction SilentlyContinue
    }
}

Write-Host ''
if ($script:failures -eq 0) {
    Write-Host 'All checks passed.' -ForegroundColor Green
    exit 0
}
Write-Host "$($script:failures) check(s) failed." -ForegroundColor Red
exit 1
