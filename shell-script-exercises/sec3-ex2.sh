#!/bin/bash
function file_count() {
    local DIRNAME=$1
    local NUMBER_OF_FILES=$(ls $1 | wc -l)
    echo "${DIRNAME}: ${NUMBER_OF_FILES}"
}

file_count /etc
file_count /var
file_count /usr/bin