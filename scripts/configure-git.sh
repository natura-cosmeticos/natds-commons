#!/bin/bash
set -e

git remote rm origin
git remote add origin "https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}"

git fetch --quiet
git checkout "${TRAVIS_BRANCH}"

git config --global user.email $GITHUB_USER_EMAIL
git config --global user.name "${GITHUB_USER_NAME} in behalf of Design System Team"
