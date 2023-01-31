#!/bin/bash
set -e

git fetch --tags
npm config set '//registry.npmjs.org/:_authToken' '${NPM_TOKEN}'
yarn config set _authToken '${NPM_TOKEN}'

echo "//registry.yarnpkg.com/:_authToken=$NPM_TOKEN" >>~/.npmrc