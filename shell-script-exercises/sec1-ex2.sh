#!/bin/bash
FILE="/etc/shadow"

if [ -e $FILE ]
then
    echo "Shadow passwords are enabled"
    if [ -w $FILE ]
    then
        echo "You have permissions to edit ${FILE}."
    else
        echo "You do NOT have permissions to edit ${FILE}."
    fi
else
    echo "Shadow passowords are not enabled"
fi