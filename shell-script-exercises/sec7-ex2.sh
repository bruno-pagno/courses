#!/bin/bash

read -p "How many lines of /etc/passwd would you like to see? " SHOW_LINES

CURRENT_LINE=1

while read LINE
do
    if [ "$CURRENT_LINE" -gt "$SHOW_LINES" ]
    then
        break
    fi
    echo "$CURRENT_LINE: $LINE"
    ((CURRENT_LINE++))
done < /etc/passwd
