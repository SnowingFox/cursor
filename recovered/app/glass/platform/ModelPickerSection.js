// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelPickerSection.js range:39224510..39239753
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.136Z
// wrapper: KlC deps:7 [E, at, Mt, Fxn, itf, aS, mk]
// declarations: YlC, WYv (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
KlC = L({ "ModelPickerSection.js"() {
  "use strict";
  E(), at(), Mt(), Fxn(), itf(), aS(), mk(), idc = [{ name: "default", defaultOn: true, clientDisplayName: "Auto", parameterDefinitions: [{ id: "kind", name: "Kind", parameterType: { enumParameter: { values: [{ value: "default" }] } } }], variants: [{ parameterValues: [{ id: "kind", value: "default" }], displayName: "Auto", isMaxMode: false, tagline: "Balanced for quality and speed" }, { parameterValues: [{ id: "kind", value: "high" }], displayName: "High", isMaxMode: false, tagline: "Best models for complex tasks" }] }, { name: "claude-4.5-sonnet", clientDisplayName: "Claude 4.5 Sonnet", inputboxShortModelName: "Sonnet 4.5", defaultOn: true, supportsAgent: true, supportsMaxMode: true, supportsNonMaxMode: true, supportsThinking: true, supportsImages: true, parameterDefinitions: [{ id: "thinking", name: "Thinking", markdownTooltip: "Enable extended thinking for complex reasoning tasks", parameterType: { booleanParameter: {} } }, { id: "context", name: "Context", markdownTooltip: "Maximum context window size", parameterType: { enumParameter: { values: [{ value: "200K", displayName: "200K" }, { value: "1M", displayName: "1M (Max)" }] } } }], variants: [{ parameterValues: [{ id: "thinking", value: "false" }, { id: "context", value: "200K" }], displayName: "Sonnet 4.5", isMaxMode: false, isDefaultNonMaxConfig: true, tooltipData: { markdownContent: "Claude 4.5 Sonnet with standard context (200K tokens)" } }, { parameterValues: [{ id: "thinking", value: "false" }, { id: "context", value: "1M" }], displayName: "Sonnet 4.5", isMaxMode: true, tooltipData: { markdownContent: "Claude 4.5 Sonnet with extended context (1M tokens)" } }, { parameterValues: [{ id: "thinking", value: "true" }, { id: "context", value: "200K" }], displayName: "Sonnet 4.5 :icon-brain:", isMaxMode: false, tooltipData: { markdownContent: "Claude 4.5 Sonnet with thinking mode enabled" } }, { parameterValues: [{ id: "thinking", value: "true" }, { id: "context", value: "1M" }], displayName: "Sonnet 4.5 :icon-brain: 1M", isMaxMode: true, isDefaultMaxConfig: true, tooltipData: { markdownContent: "Claude 4.5 Sonnet with thinking mode and extended context" } }] }, { name: "gpt-5", clientDisplayName: "GPT-5", inputboxShortModelName: "GPT-5", defaultOn: true, supportsAgent: true, supportsMaxMode: true, supportsNonMaxMode: true, supportsThinking: false, supportsImages: true, parameterDefinitions: [], variants: [{ parameterValues: [], displayName: "GPT-5", isMaxMode: false, isDefaultNonMaxConfig: true, tooltipData: { markdownContent: "OpenAI's most capable model for complex tasks" } }, { parameterValues: [], displayName: "GPT-5", isMaxMode: true, isDefaultMaxConfig: true, tooltipData: { markdownContent: "OpenAI's GPT-5 with max mode enabled" } }] }, { name: "gemini-2.5-pro", clientDisplayName: "Gemini 2.5 Pro", inputboxShortModelName: "Gemini 2.5", defaultOn: true, supportsAgent: true, supportsMaxMode: true, supportsNonMaxMode: true, supportsThinking: true, supportsImages: true, parameterDefinitions: [{ id: "thinking", name: "Thinking", markdownTooltip: "Enable extended thinking for complex reasoning", parameterType: { booleanParameter: {} } }], variants: [{ parameterValues: [{ id: "thinking", value: "false" }], displayName: "Gemini 2.5 Pro", isMaxMode: false, isDefaultNonMaxConfig: true, tooltipData: { markdownContent: "Google's advanced reasoning model" } }, { parameterValues: [{ id: "thinking", value: "true" }], displayName: "Gemini 2.5 Pro :icon-brain:", isMaxMode: true, isDefaultMaxConfig: true, tooltipData: { markdownContent: "Google's Gemini with thinking mode" } }] }];
} });
function YlC() {
  const e = Gr().notificationService, n = () => {
    e.notify({ severity: Yn.Info, message: "This is an info notification", sticky: true });
  }, i = () => {
    e.notify({ severity: Yn.Warning, message: "This is a warning notification", sticky: true });
  }, r = () => {
    e.notify({ severity: Yn.Error, message: "This is an error notification", sticky: true });
  }, s = () => {
    e.notify({ severity: Yn.Info, message: "This is a very long notification message that will wrap to multiple lines. It contains a lot of text to demonstrate how the notification system handles lengthy content that might not fit in a single line. This is useful for showing detailed error messages or instructions to the user.", sticky: true });
  }, o = () => {
    ["First notification in the array", "Second notification in the array", "Third notification in the array"].forEach((M) => {
      e.notify({ severity: Yn.Info, message: M, sticky: true });
    });
  }, a = () => {
    e.notify({ severity: Yn.Info, message: "This notification includes a source", source: { id: "example-source", label: "Example Extension" }, sticky: true });
  }, l = () => {
    e.notify({ severity: Yn.Warning, message: "This is a high priority notification", priority: F1.URGENT, sticky: true });
  }, c = () => {
    e.prompt(Yn.Info, "This is a prompt notification", [{ label: "OK", run: () => console.log("OK clicked") }, { label: "Cancel", run: () => console.log("Cancel clicked") }], { sticky: true });
  }, u = () => {
    e.prompt(Yn.Warning, "Please select an option:", [{ label: "Option 1", run: () => console.log("Option 1 clicked") }, { label: "Option 2", run: () => console.log("Option 2 clicked") }, { label: "Option 3", run: () => console.log("Option 3 clicked") }, { label: "More Info", run: () => console.log("More Info clicked"), isSecondary: true }, { label: "Help", run: () => console.log("Help clicked"), isSecondary: true }], { sticky: true });
  }, d = () => {
    e.notify({ severity: Yn.Info, message: `This notification has a "Don't Show Again" option`, neverShowAgain: { id: "dontShowAgainExample", scope: ene.APPLICATION }, sticky: true });
  }, h = () => {
    e.notify({ severity: Yn.Info, message: `This notification has a secondary "Don't Show Again" option`, neverShowAgain: { id: "dontShowAgainSecondaryExample", scope: ene.APPLICATION, isSecondary: true }, sticky: true });
  }, p = () => {
    e.prompt(Yn.Info, `This prompt has a "Don't Show Again" option`, [{ label: "OK", run: () => console.log("OK clicked") }], { neverShowAgain: { id: "promptDontShowAgainExample2", scope: ene.APPLICATION }, sticky: true });
  }, g = () => {
    e.status("This is a status message", { hideAfter: 1 / 0 });
  }, f = () => {
    const M = e.notify({ severity: Yn.Info, message: "Operation in progress...", progress: { infinite: true }, sticky: true });
    setTimeout(() => {
      M.progress.done(), M.updateMessage("Operation completed successfully"), setTimeout(() => M.close(), 2e3);
    }, 5e3);
  }, _ = () => {
    const M = e.notify({ severity: Yn.Info, message: "Downloading update...", progress: { total: 100 }, sticky: true });
    let O = 0;
    const N = setInterval(() => {
      O += 10, M.progress.worked(10), M.updateMessage(`Downloading update... ${O}%`), O >= 100 && (clearInterval(N), M.updateMessage("Download complete!"), setTimeout(() => M.close(), 2e3));
    }, 500);
  }, b = () => {
    const M = e.notify({ severity: Yn.Info, message: "Installing extensions...", progress: { total: 100 }, sticky: true, actions: { primary: [{ id: "cancel", label: "Cancel", tooltip: "Cancel the installation", class: "", enabled: true, run: () => {
      clearInterval(N), M.close();
    } }, { id: "background", label: "Run in Background", tooltip: "Continue in background", class: "", enabled: true, run: () => console.log("Run in Background clicked") }] } });
    let O = 0;
    const N = setInterval(() => {
      O += 5, M.progress.worked(5), M.updateMessage(`Installing extensions... ${O}%`), O >= 100 && (clearInterval(N), M.updateMessage("Installation complete!"), setTimeout(() => M.close(), 2e3));
    }, 300);
  }, y = () => {
    let M = 0;
    const O = e.notify({ severity: Yn.Warning, message: `Interactive notification: click counter = ${M}`, actions: { primary: [{ id: "increment", label: "Increment", tooltip: "Increment counter", class: "", enabled: true, run: () => {
      M++, O.updateMessage(`Interactive notification: click counter = ${M}`);
    } }] }, sticky: true });
  }, S = () => {
    const M = e.notify({ severity: Yn.Warning, message: "Your project contains 3 critical security vulnerabilities", actions: { primary: [{ id: "fix-all", label: "Fix All", tooltip: "Fix all vulnerabilities", class: "", enabled: true, run: () => {
      M.updateSeverity(Yn.Info), M.updateMessage("Fixing vulnerabilities...");
      const O = e.notify({ severity: Yn.Info, message: "Fixing vulnerabilities...", progress: { infinite: true }, sticky: true });
      setTimeout(() => {
        O.updateMessage("All vulnerabilities fixed successfully!"), O.progress.done(), setTimeout(() => O.close(), 2e3), M.close();
      }, 3e3);
    } }, { id: "view-details", label: "View Details", tooltip: "View vulnerability details", class: "", enabled: true, run: () => console.log("View Details clicked") }, { id: "ignore", label: "Ignore", tooltip: "Ignore these warnings", class: "", enabled: true, run: () => console.log("Ignore clicked") }] }, neverShowAgain: { id: "securityWarningExample", scope: ene.APPLICATION }, sticky: true });
  }, k = () => {
    const M = e.notify({ severity: Yn.Info, message: "Starting multi-stage process...", progress: { infinite: true }, sticky: true });
    setTimeout(() => {
      M.progress.done(), M.close();
      const O = e.notify({ severity: Yn.Warning, message: "Process requires your attention", actions: { primary: [{ id: "continue", label: "Continue", tooltip: "Continue the process", class: "", enabled: true, run: () => {
        O.close();
        const N = e.notify({ severity: Yn.Info, message: "Finalizing process...", progress: { infinite: true }, sticky: true });
        setTimeout(() => {
          N.updateMessage("Process completed successfully!"), N.progress.done(), setTimeout(() => N.close(), 2e3);
        }, 2e3);
      } }, { id: "cancel", label: "Cancel", tooltip: "Cancel the process", class: "", enabled: true, run: () => O.close() }] }, sticky: true });
    }, 2e3);
  }, C = () => {
    e.notify({ severity: Yn.Info, message: "This is a very long notification message with buttons. It contains a lot of text to demonstrate how the notification system handles lengthy content with interactive elements. This is useful for showing detailed error messages or instructions that require user action.", actions: { primary: [{ id: "proceed", label: "Proceed", tooltip: "Proceed with the action", class: "", enabled: true, run: () => console.log("Proceed clicked") }, { id: "dismiss", label: "Dismiss", tooltip: "Dismiss this notification", class: "", enabled: true, run: () => console.log("Dismiss clicked") }], secondary: [{ id: "learn-more", label: "Learn More", tooltip: "Get more information", class: "", enabled: true, run: () => console.log("Learn More clicked") }] }, sticky: true });
  }, T = () => {
    e.notify({ severity: Yn.Error, message: "An error occurred while processing your request", actions: { primary: [{ id: "retry", label: "Retry", tooltip: "Try again", class: "", enabled: true, run: () => console.log("Retry clicked") }, { id: "report", label: "Report Issue", tooltip: "Report this problem", class: "", enabled: true, run: () => console.log("Report Issue clicked") }], secondary: [{ id: "ignore", label: "Ignore", tooltip: "Ignore this error", class: "", enabled: true, run: () => console.log("Ignore clicked") }] }, sticky: true });
  }, I = () => {
    e.notify({ severity: Yn.Warning, message: "Docker container configuration has changed. The container needs to be rebuilt for changes to take effect.", source: { id: "dev-containers", label: "Dev Containers" }, actions: { primary: [{ id: "rebuild", label: "Rebuild Container", tooltip: "Rebuild the dev container with new configuration", class: "", enabled: true, run: () => console.log("Rebuild Container clicked") }, { id: "show-changes", label: "Show Changes", tooltip: "View configuration changes", class: "", enabled: true, run: () => console.log("Show Changes clicked") }, { id: "ignore-changes", label: "Ignore", tooltip: "Continue without rebuilding", class: "", enabled: true, run: () => console.log("Ignore Changes clicked") }] }, sticky: true });
  }, A = () => {
    const M = e.notify({ severity: Yn.Info, message: "This notification has initially disabled actions", actions: { primary: [{ id: "action1", label: "Disabled Action", tooltip: "This action is initially disabled", class: "", enabled: false, run: () => console.log("Disabled action clicked") }, { id: "enable-action", label: "Enable Action", tooltip: "Click to enable the other action", class: "", enabled: true, run: () => {
      M.updateActions({ primary: [{ id: "action1", label: "Now Enabled", tooltip: "This action is now enabled", class: "", enabled: true, run: () => {
        console.log("Previously disabled action clicked"), M.close();
      } }, { id: "enable-action", label: "Enable Action", tooltip: "Action already enabled", class: "", enabled: false, run: () => {
      } }] });
    } }] }, sticky: true });
  }, P = () => {
    e.notify({ severity: Yn.Info, message: "This notification contains [links](https://code.visualstudio.com) in the text. You can also visit [GitHub](https://github.com) or read the [documentation](https://code.visualstudio.com/docs).", actions: { primary: [{ id: "ok", label: "OK", tooltip: "Acknowledge", class: "", enabled: true, run: () => console.log("OK clicked") }] }, sticky: true });
  };
  return Ee(pk, { title: "Notifications", style: { display: "flex", gap: "4px", "flex-wrap": "wrap", "flex-direction": "row", "align-items": "flex-start", padding: "10px" }, get children() {
    var M = WYv();
    return Le(M, Ee(hp, { title: "Info", onClick: n }), null), Le(M, Ee(hp, { title: "Warning", onClick: i }), null), Le(M, Ee(hp, { title: "Error", onClick: r }), null), Le(M, Ee(hp, { title: "Long Content", onClick: s }), null), Le(M, Ee(hp, { title: "Multiple Notifications", onClick: o }), null), Le(M, Ee(hp, { title: "With Source", onClick: a }), null), Le(M, Ee(hp, { title: "High Priority", onClick: l }), null), Le(M, Ee(hp, { title: "Prompt", onClick: c }), null), Le(M, Ee(hp, { title: "Many Buttons", onClick: u }), null), Le(M, Ee(hp, { title: "Never Show Again", onClick: d }), null), Le(M, Ee(hp, { title: "Never Show (Secondary)", onClick: h }), null), Le(M, Ee(hp, { title: "Prompt w/ Never Show", onClick: p }), null), Le(M, Ee(hp, { title: "Status", onClick: g }), null), Le(M, Ee(hp, { title: "Infinite Progress", onClick: f }), null), Le(M, Ee(hp, { title: "Progress Bar", onClick: _ }), null), Le(M, Ee(hp, { title: "Long Content w/ Buttons", onClick: C }), null), Le(M, Ee(hp, { title: "Error w/ Buttons", onClick: T }), null), Le(M, Ee(hp, { title: "Progress w/ Buttons", onClick: b }), null), Le(M, Ee(hp, { title: "Interactive", onClick: y }), null), Le(M, Ee(hp, { title: "Complex", onClick: S }), null), Le(M, Ee(hp, { title: "Multi-Stage", onClick: k }), null), Le(M, Ee(hp, { title: "Dev Container", onClick: I }), null), Le(M, Ee(hp, { title: "Disabled Actions", onClick: A }), null), Le(M, Ee(hp, { title: "With Links", onClick: P }), null), M;
  } });
}
var WYv,
