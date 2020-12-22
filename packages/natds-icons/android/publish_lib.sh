#!/bin/bash
if [[ $WILL_RELEASE_ICONS = true ]]; then
  mkdir -p "packages/natds-icons/android/icons/src/main/res/drawable"
  cp packages/natds-icons/dist/drawables/* packages/natds-icons/android/icons/src/main/res/drawable
  cd packages/natds-icons/android
  gradle icon:assemble
  cd icons
  gradle publish --stacktrace
fi
