#!/bin/bash
set -e

git init
git remote add origin "https://${GITHUB_TOKEN}@github.com/natura-cosmeticos/${BITRISEIO_GIT_REPOSITORY_SLUG}"

git fetch --quiet
git checkout $BITRISE_GIT_BRANCH

git config --global user.email $GITHUB_USER_EMAIL
git config --global user.name "${GITHUB_USER_NAME} in behalf of Design System Team"
