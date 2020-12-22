#!/bin/bash

if [[ $WILL_RELEASE_ICONS = true ]]; then
  echo "Publishing version ${NATDS_ICONS_VERSION} at tag ${NATDS_ICONS_TAG}"
  pod trunk push NatDSIcons.podspec
fi

echo "Not publishing icons, skipping..."
