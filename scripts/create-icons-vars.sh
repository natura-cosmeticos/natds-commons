#!/bin/bash
set -e

ICONS_VERSION=$(packages/natds-cli/bin/getPackageVersion.js ./packages/natds-icons/package.json)
echo "Natds icons version ${ICONS_VERSION}"

ICONS_TAG=@naturacosmeticos/natds-icons@${ICONS_VERSION}
echo "Natds icons tag ${ICONS_TAG}"

envman add --key NATDS_ICONS_VERSION --value ICONS_VERSION
envman add --key NATDS_ICONS_TAG --value ICONS_TAG
