#!/bin/bash
MESSAGE="Shell scripting is fun!"
HOSTNAME=$(hostname) # `hostname` also works

echo "Hello world"
echo "$MESSAGE"
echo "This script is running on ${HOSTNAME}"