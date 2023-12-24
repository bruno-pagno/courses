#!/bin/bash
FILE=$1

if [ -f "$1" ]
then
    exit 0
elif [ -d "$1" ]
then
    exit 1
else
    exit 2
fi