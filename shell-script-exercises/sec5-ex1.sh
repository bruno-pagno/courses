#!/bin/bash

COMMAND=$1

case "$COMMAND" in
    start)
        echo "start command"
    ;;
    stop)
        echo "stop command"
    ;;
    *)
    echo "Invalid input. Usage: start | stop"
    ;;
esac