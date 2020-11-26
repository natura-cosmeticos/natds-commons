#!/bin/sh
export NATDS_ICONS_VERSION=$(../natds-cli/bin/getPackageVersion.js)
gradle icon:assemble
cd icons
gradle publish --stacktrace
