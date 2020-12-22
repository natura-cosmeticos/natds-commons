#!/bin/bash
set -e

ICONS_VERSION=$(../../../natds-cli/bin/getPackageVersion.js ../../../natds-icons/package.json)
echo "Natds icons version ${NATDS_ICONS_VERSION}"

ICONS_TAG=@naturacosmeticos/natds-icons@${NATDS_ICONS_VERSION}
echo "Natds icons tag ${NATDS_ICONS_TAG}"

envman add --key NATDS_ICONS_VERSION --value ICONS_VERSION
envman add --key NATDS_ICONS_TAG --value ICONS_TAG
