#!/bin/bash

CURRENT_LINE=1
while read LINE
do
    echo "$CURRENT_LINE: $LINE"
    ((CURRENT_LINE++))
done < /etc/passwd
