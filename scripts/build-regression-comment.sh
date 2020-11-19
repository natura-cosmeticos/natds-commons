#!/bin/bash
set -e

IMG_URL=$(bash ./upload-image.sh)

NO_DIFF_MESSAGE="
The regression tests for commit ${GITHUB_SHA} did not generated any diff

![regression test diff result](https://media.giphy.com/media/Wq3gAYYuERDSU9DAbT/giphy.gif)
"

DIFF_MESSAGE="
Regression tests diff result for commit ${GITHUB_SHA}.

![regression test diff result](${IMG_URL})
"

ERROR_MESSAGE="
An error ocurred uploading the image.

![regression test diff result](https://media.giphy.com/media/5zgXE8TTwrOj2ndaNc/giphy.gif)
"

case $IMG_URL in
"upload_error")
  echo $ERROR_MESSAGE
  ;;
"no_diff")
  echo $NO_DIFF_MESSAGE
  ;;
*)
  echo $DIFF_MESSAGE
  ;;
esac
