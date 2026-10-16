#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");
const crypto = require("crypto");
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (fs.existsSync(dest)) {
      const destStats = fs.statSync(dest);
      if (!destStats.isDirectory()) {
        fs.unlinkSync(dest);
      }
    }
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    if (fs.existsSync(dest)) {
      const destStats = fs.statSync(dest);
      if (destStats.isDirectory()) {
        removeRecursiveSync(dest);
      } else {
        const srcContent = fs.readFileSync(src);
        const destContent = fs.readFileSync(dest);
        if (srcContent.equals(destContent)) {
          return;
        }
      }
    }
    fs.copyFileSync(src, dest);
  }
}
function removeRecursiveSync(targetPath) {
  if (fs.existsSync(targetPath)) {
    if (fs.statSync(targetPath).isDirectory()) {
      fs.readdirSync(targetPath).forEach((file) => {
        const curPath = path.join(targetPath, file);
        removeRecursiveSync(curPath);
      });
      fs.rmdirSync(targetPath);
    } else {
      fs.unlinkSync(targetPath);
    }
  }
}
function syncDirectories(src, dest) {
  copyRecursiveSync(src, dest);
  function cleanExtraFiles(srcDir, destDir) {
    if (!fs.existsSync(destDir)) return;
    const destFiles = fs.readdirSync(destDir);
    const srcFiles = fs.existsSync(srcDir) ? fs.readdirSync(srcDir) : [];
    destFiles.forEach((file) => {
      const destPath = path.join(destDir, file);
      const srcPath = path.join(srcDir, file);
      if (!srcFiles.includes(file)) {
        removeRecursiveSync(destPath);
      } else if (fs.statSync(destPath).isDirectory()) {
        cleanExtraFiles(srcPath, destPath);
      }
    });
  }
  cleanExtraFiles(src, dest);
}
async function preCompile() {
  const scriptDir = __dirname;
  const vscodeRoot = path.join(scriptDir, "..", "..", "..");
  const srcRoot = path.join(vscodeRoot, "src", "vs");
  const vsBaseRoot = path.join(vscodeRoot, "packages", "vs-base", "src", "vs");
  const destRoot = path.join(scriptDir, "src", "vs");
  const stageDir = path.join(os.tmpdir(), "vscode-precompile-" + crypto.randomBytes(8).toString("hex"));
  try {
    fs.mkdirSync(path.join(stageDir, "vs", "base"), { recursive: true });
    fs.mkdirSync(path.join(stageDir, "vs", "editor", "common"), { recursive: true });
    copyRecursiveSync(
      path.join(vsBaseRoot, "base", "common"),
      path.join(stageDir, "vs", "base", "common")
    );
    copyRecursiveSync(
      path.join(srcRoot, "base", "common"),
      path.join(stageDir, "vs", "base", "common")
    );
    copyRecursiveSync(
      path.join(srcRoot, "editor", "common", "core"),
      path.join(stageDir, "vs", "editor", "common", "core")
    );
    copyRecursiveSync(
      path.join(srcRoot, "editor", "common", "diff"),
      path.join(stageDir, "vs", "editor", "common", "diff")
    );
    const filesToRemove = [
      path.join(stageDir, "vs", "editor", "common", "diff", "defaultLinesDiffComputer", "wordDiff.ts"),
      path.join(stageDir, "vs", "editor", "common", "core", "editorColorRegistry.ts"),
      path.join(stageDir, "vs", "editor", "common", "diff", "documentDiffProvider.ts"),
      path.join(stageDir, "vs", "base", "common", "constants.ts")
    ];
    filesToRemove.forEach((file) => {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    });
    const cppUtilsPath = path.join(stageDir, "vs", "base", "common", "cppUtils");
    removeRecursiveSync(cppUtilsPath);
    const hooksPath = path.join(stageDir, "vs", "base", "common", "hooks");
    removeRecursiveSync(hooksPath);
    fs.copyFileSync(
      path.join(srcRoot, "nls.ts"),
      path.join(stageDir, "vs", "nls.ts")
    );
    fs.copyFileSync(
      path.join(srcRoot, "nls.messages.ts"),
      path.join(stageDir, "vs", "nls.messages.ts")
    );
    if (!fs.existsSync(destRoot)) {
      fs.mkdirSync(destRoot, { recursive: true });
    }
    syncDirectories(path.join(stageDir, "vs"), destRoot);
    console.log("Pre-compile sync completed successfully");
  } catch (error) {
    console.error("Pre-compile sync failed:", error);
    throw error;
  } finally {
    try {
      removeRecursiveSync(stageDir);
    } catch (err) {
      console.warn("Failed to clean up staging directory:", err);
    }
  }
}
module.exports = preCompile;
if (require.main === module) {
  preCompile().catch((error) => {
    process.exit(1);
  });
}
