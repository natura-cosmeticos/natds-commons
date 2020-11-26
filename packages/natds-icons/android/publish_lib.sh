#!/bin/sh
export NATDS_ICONS_VERSION=$(packages/natds-cli/bin/getPackageVersion.js packages/natds-icons/package.json)
cd packages/natds-icons/android
gradle icon:assemble
cd icons
gradle publish --stacktrace
