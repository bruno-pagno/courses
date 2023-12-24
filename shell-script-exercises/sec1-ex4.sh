#!/bin/bash
for FILE_NAME in $@
    do
    echo "> $FILE_NAME"
    if [ -f "$FILE_NAME" ]
    then
        echo "type: file"
    elif [ -d "$FILE_NAME" ]
    then
        echo "type: directory"
    else
        echo "type: something other than a regular file or directory."
    fi

    ls -l $FILE_NAME
    echo ""
done