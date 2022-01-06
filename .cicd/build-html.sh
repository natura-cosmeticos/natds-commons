#!/bin/bash
set -e

[[ -z "${CHANGE_BRANCH}" ]] && BRANCH=$BRANCH_NAME || BRANCH=$CHANGE_BRANCH

FOLDER_NAME=${BRANCH//[\/]/-}

[[ $1 = "main" ]] && OUTPUT_PATH=public || OUTPUT_PATH="public/${FOLDER_NAME}"

echo "Verifying $1"

mkdir -p ${OUTPUT_PATH}
echo "Created ${FOLDER_NAME} folder at ${OUTPUT_PATH}"

yarn install
yarn html:build

cp -r build/* ${OUTPUT_PATH}

