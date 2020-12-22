#!/bin/bash
set -e

cp packages/natds-icons/dist/fonts/natds-icons.ttf packages/natds-icons/ios/NatDSIcons/Resources/natds-icons-ios.ttf
cp packages/natds-icons/dist/natds-icons.swift packages/natds-icons/ios/NatDSIcons/NatDSIcons/Icon.swift

git add packages/natds-themes/build/

git add packages/natds-icons/dist/
git add packages/natds-icons/regression/
git add packages/natds-icons/src/generated/
git add packages/natds-icons/ios/NatDSIcons/NatDSIcons/
git add packages/natds-icons/ios/NatDSIcons/Resources/

git commit --allow-empty -m "chore: update generated files [ci skip]"
git push origin HEAD
