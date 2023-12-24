#!/bin/bash
log_random() {
    logger -s -t random-script "random generated number: $RANDOM"
}

log_random
log_random
log_random