// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/scripts/tsc-some-files.sh sha256:f0a6b5e30c04b50bfb3665c027b9d0dbab655b51f4a7393deb5e3f5410497964
// module: (adopted engineering file)
// basis: shipped-config confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:31.841Z

#!/bin/bash
include_files=()
for f in "$@"; do
  include_files+=("${f#$PWD/}")
done
node_modules/.bin/tsc --noEmit -p . | (
  status=0
  show_continuation=false
  while IFS='' read -r line; do
    case "$line" in
    (' '*)
      if $show_continuation; then
        echo "$line" >&2
      fi
      ;;
    (*)
      file="${line%%(*}"
      if [[ " ${include_files[@]} " =~ " ${file} " ]]; then
        show_continuation=true
        echo "$line" >&2
        status=1
      else
        show_continuation=false
      fi
      ;;
    esac
  done
  exit $status
)