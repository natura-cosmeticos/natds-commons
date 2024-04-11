#!/bin/bash
set -e

IMG_URL=$(bash ./scripts/upload-image.sh)

function NO_DIFF_MESSAGE() {
  MESSAGE="
The icons regression test for commit ${GITHUB_SHA} did not generated any diff

![regression test diff result](https://media.giphy.com/media/Wq3gAYYuERDSU9DAbT/giphy.gif)
"
  printf "$MESSAGE"
}

function DIFF_MESSAGE() {
  MESSAGE="
Icons regression test diff result for commit ${GITHUB_SHA}.

current | diff | new
![regression test diff result](${IMG_URL})
"
  printf "$MESSAGE"
}

function ERROR_MESSAGE() {
    MESSAGE="
An error ocurred uploading the icons regression test image for commit ${GITHUB_SHA}.

![regression test diff result](https://media.giphy.com/media/5zgXE8TTwrOj2ndaNc/giphy.gif)
"
  printf "$MESSAGE"
}

# case $IMG_URL in
# "upload_error") ERROR_MESSAGE ;;
# "no_diff") NO_DIFF_MESSAGE ;;
# *) DIFF_MESSAGE ;;
# esac

case $IMG_URL in
    "upload_error")
        ERROR_MESSAGE
        ;;
    "no_diff")
        NO_DIFF_MESSAGE
        ;;
    *)
        DIFF_MESSAGE
        ;;
esac
