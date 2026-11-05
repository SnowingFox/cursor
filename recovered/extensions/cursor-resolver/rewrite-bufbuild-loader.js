// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/rewrite-bufbuild-loader.js sha256:7e45d03bb993bd6f75798f6dde4bc3f0c8b3865ab0baa0f2879a312f465e4b75
// module: (adopted engineering file)
// basis: shipped-config confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:31.841Z

"use strict";
module.exports = function rewriteBufbuildLoader(source) {
  return source.replace(
    /(from\s+["'])(\.\.\/)*external\/bufbuild\/protobuf\.js(["'])/g,
    "$1@bufbuild/protobuf$3"
  );
};
