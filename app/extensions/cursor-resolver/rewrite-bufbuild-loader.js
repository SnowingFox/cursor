"use strict";
module.exports = function rewriteBufbuildLoader(source) {
  return source.replace(
    /(from\s+["'])(\.\.\/)*external\/bufbuild\/protobuf\.js(["'])/g,
    "$1@bufbuild/protobuf$3"
  );
};
