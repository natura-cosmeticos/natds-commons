#!/bin/bash
set -e

git remote rm origin
git remote add origin "https://${GITHUB_TOKEN}@github.com/${TRAVIS_REPO_SLUG}"

git fetch --quiet
git checkout "${TRAVIS_BRANCH}"

git config --global user.email "systemteamopensource@natura.net"
git config --global user.name "${GITHUB_API_USER} in behalf of System Team Open Source"
