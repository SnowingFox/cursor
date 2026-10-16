"use strict";
exports.id = 933, exports.ids = [933], exports.modules = { 54933: (e, r, t) => {
  t.d(r, { registerCursorIgnoreFileWatcher: () => n });
  var s = t(91105), a = t(91398);
  function n(e2) {
    const r2 = a.workspace.createFileSystemWatcher("**/.cursorignore"), t2 = (r3) => {
      for (const t3 of e2()) r3(t3).catch(() => {
      });
    };
    return r2.onDidCreate(async (e3) => {
      const r3 = await (0, s.yeE)(e3.fsPath);
      null !== r3 && t2((e4) => e4.handleCursorIgnoreCreated(r3));
    }), r2.onDidChange(async (e3) => {
      const r3 = await (0, s.yeE)(e3.fsPath);
      null !== r3 && t2((e4) => e4.handleCursorIgnoreChanged(r3));
    }), r2.onDidDelete(async (e3) => {
      const r3 = await (0, s.yeE)(e3.fsPath) ?? (0, s.gMI)(e3.fsPath);
      t2((e4) => e4.handleCursorIgnoreDeleted(r3));
    }), r2;
  }
} };
