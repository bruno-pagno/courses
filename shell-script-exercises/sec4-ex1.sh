#!/bin/bash

DATE=$(date +%F)
for PNG_IMAGE in $(ls *.jpg)
    do
    echo "renaming $PNG_IMAGE to ${DATE}-${PNG_IMAGE}"
    mv "$PNG_IMAGE" "${DATE}-${PNG_IMAGE}"
done