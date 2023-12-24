#!/bin/bash

while true
do
    echo "1: Disk Usage"
    echo "2: Uptime"
    echo "3: Logged Users"
    echo "q or other: quit"
    read -p "Choose your option:" ANSWER

    echo "$ANSWER"
    case $ANSWER in
        1)
        du
        ;;
        2)
        uptime
        ;;
        3)
        who
        ;;
        *)
        break
        ;;
    esac

done