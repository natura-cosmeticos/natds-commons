#!/bin/bash
set -e

git add packages/natds-themes/build/

git add packages/natds-icons/dist/
git add packages/natds-icons/regression/
git add packages/natds-icons/src/generated/

git commit --allow-empty -m "chore: update generated files [skip ci]"
git push --set-upstream origin "${TRAVIS_BRANCH}"
