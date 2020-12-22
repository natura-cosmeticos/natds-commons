#!/bin/bash

if [[ $WILL_RELEASE_ICONS = true ]]; then
  echo "Publishing version ${NATDS_ICONS_VERSION} at tag ${NATDS_ICONS_TAG}"
  cp ../../dist/fonts/natds-icons.ttf ./Resources/natds-icons-ios.ttf
  cp ../../dist/natds-icons.swift ./NatDSIcons/Icon.swift
  pod trunk push NatDSIcons.podspec
fi

echo "Not publishing icons, skipping..."
