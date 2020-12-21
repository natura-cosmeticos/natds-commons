#!/bin/bash
set -e

export NATDS_ICONS_VERSION=$(../../../natds-cli/bin/getPackageVersion.js ../../../natds-icons/package.json)
echo "Getting version ${NATDS_ICONS_VERSION} info"

export NATDS_ICONS_TAG=@naturacosmeticos/natds-icons@${NATDS_ICONS_VERSION}
echo "Publishing tag ${NATDS_ICONS_TAG}"
