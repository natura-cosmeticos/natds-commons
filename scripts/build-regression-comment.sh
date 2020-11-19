#!/bin/bash
set -e

IMG_URL=$(bash ./scripts/upload-image.sh)

function NO_DIFF_MESSAGE() {
  echo "The icons regression test for commit ${GITHUB_SHA} did not generated any diff ![regression test diff result](https://media.giphy.com/media/Wq3gAYYuERDSU9DAbT/giphy.gif)"
}

function DIFF_MESSAGE() {
  echo "Icons regression test diff result for commit ${GITHUB_SHA}. ![regression test diff result](${IMG_URL})"
}

function ERROR_MESSAGE() {
  echo "An error ocurred uploading the icons regression test image for commit ${GITHUB_SHA}. ![regression test diff result](https://media.giphy.com/media/5zgXE8TTwrOj2ndaNc/giphy.gif)"
}

case $IMG_URL in
"upload_error") ERROR_MESSAGE ;;
"no_diff") NO_DIFF_MESSAGE ;;
*) DIFF_MESSAGE ;;
esac
