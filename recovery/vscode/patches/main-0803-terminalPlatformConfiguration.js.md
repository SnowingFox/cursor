# Patch evidence: terminalPlatformConfiguration.js

- module: app-out-main-js:0803
- bundle: app/out/main.js range 2393096..2397959
- upstream: src/vs/platform/terminal/common/terminalPlatformConfiguration.ts sha256:d41d3c2507104aa58ac4d97f2c9058d37bcce049c87c52d751ba1396825d0da0
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.833; shared rare anchors: 44
- bundle-only anchors: 4; upstream anchors absent from bundle: 95

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal-powershell | 2395269..2395288 | no (exists elsewhere upstream) | type: "object", default: { PowerShell: { source: "PowerShell", icon: "terminal-powershell" }, "Command Prompt": { path: ["${env:windir}\\Sysnative\\cmd.exe", " |
| terminal-cmd | 2395411..2395423 | no (exists elsewhere upstream) | tive\\cmd.exe", "${env:windir}\\System32\\cmd.exe"], args: [], icon: "terminal-cmd" }, "Git Bash": { source: "Git Bash" } }, additionalProperties: { any |
| terminal-bash | 2396092..2396105 | no (exists elsewhere upstream) | type: "object", default: { bash: { path: "bash", args: ["-l"], icon: "terminal-bash" }, zsh: { path: "zsh", args: ["-l"] }, fish: { path: "fish", args: [ |
| terminal.integrated.ignoreProcessNames | 2397710..2397748 | no (exists elsewhere upstream) | pe: 1, description: E(2281, null), type: "boolean", default: true }, "terminal.integrated.ignoreProcessNames": { markdownDescription: E(2282, null, "`#terminal.integrated.confirm |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| string | 16 |
| terminal.ansiBlack | 18 |
| terminal.ansiRed | 19 |
| terminal.ansiGreen | 20 |
| terminal.ansiYellow | 21 |
| terminal.ansiBlue | 22 |
| terminal.ansiMagenta | 23 |
| terminal.ansiCyan | 24 |
| terminal.ansiWhite | 25 |
| terminalProfile.args | 38 |
| terminalProfile.icon | 45 |
| terminalProfile.color | 49 |
| terminalProfile.env | 53 |
| object | 54 |
| terminalProfile.path | 67 |
| terminalProfile.overrideName | 74 |
| boolean | 75 |
| terminalAutomationProfile.path | 86 |
| terminal.integrated.profile | 100 |
| {0} is the platform, {1} is a code block, {2} and {3} are a link start and end | 101 |
| ```json\n"terminal.integrated.profile. | 105 |
| ](https://code.visualstudio.com/docs/terminal/profiles) | 107 |
| terminal | 112 |
| terminalIntegratedConfigurationTitle | 114 |
| terminal.integrated.automationProfile.linux | 119 |
| terminal.integrated.automationProfile.osx | 137 |
| terminal.integrated.automationProfile.windows | 155 |
| terminal.integrated.agentHostProfile.linux | 173 |
| terminal.integrated.agentHostProfile.osx | 192 |
| terminal.integrated.agentHostProfile.windows | 211 |
| PowerShell | 233 |
| Command Prompt | 237 |
| ${env:windir}\\Sysnative\\cmd.exe | 239 |
| ${env:windir}\\System32\\cmd.exe | 240 |
| Git Bash | 245 |
| source | 254 |
| terminalProfile.windowsSource | 257 |
| extensionIdentifier | 265 |
| terminalProfile.windowsExtensionIdentifier | 268 |
| terminalProfile.windowsExtensionId | 272 |

