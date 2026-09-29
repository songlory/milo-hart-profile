#!/bin/bash
# Wrapper script — automatically uses Node 24 for this project
DIR="$(cd "$(dirname "$0")" && pwd)"
export PATH="$HOME/.workbuddy-ai/binaries/node/versions/24.21.0:$PATH"
cd "$DIR"
exec npm "$@"