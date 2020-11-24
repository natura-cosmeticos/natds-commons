#!/bin/bash
set -e

URL="https://api.imgur.com/3/image"

FILE="$(pwd)/packages/natds-icons/regression/__image_snapshots__/__diff_output__/icons-test-js-icon-list-should-match-the-previous-screenshot-1-diff.png"

if test -f "$FILE"; then
  IMAGE="@/${FILE}"

  IMAGE_DATA=$(curl --silent --request POST --url $URL --header "authorization: Client-ID ${IMGUR_CLIENT_ID}" --header 'content-type: multipart/form-data;' -F "image=${IMAGE}")

  node -e "const imgurResponse = ${IMAGE_DATA}; console.log(imgurResponse && imgurResponse.data && imgurResponse.data.link || 'upload_error')"
else
  echo "no_diff"
fi
