#!/bin/bash

read -p "Enter a file extension: " EXTENSION
read -p "Enter the prefix: " PREFIX

if [ -z PREFIX ]
then
    PREFIX=$(date +%F)
fi


for FILE in *.${EXTENSION}
do
    echo "renaming $FILE to ${PREFIX}-${FILE}"
    mv "$FILE" "${PREFIX}-${FILE}"
done 