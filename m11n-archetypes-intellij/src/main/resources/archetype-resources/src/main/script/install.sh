#!/bin/bash
URL=$1
REPOSITORY=$2
TARGET=$3

log () {
    echo -e "\e[94mINFO  \e[0m$1"
}

log_warn () {
    echo -e "\e[33mWARN  \e[0m$1"
}

log_error () {
    echo -e "\e[31mERROR \e[0m$1"
}

download () {
    if [ ! -d "$REPOSITORY/.cache/intellij" ]
    then
        mkdir -p $REPOSITORY/.cache/intellij
    fi

    FILENAME=${URL##*/}

    if [ ! -f "$REPOSITORY/.cache/intellij/$FILENAME" ]
    then
        log "Downloading $URL"
        wget -O $REPOSITORY/.cache/intellij/$FILENAME $URL
    else
        log_warn "$URL already cached"
    fi

    if [ ! -d "$TARGET" ]
    then
        log "Extract $FILENAME to $TARGET"
        mkdir -p $TARGET
        cd $TARGET
        tar xzf $REPOSITORY/.cache/intellij/$FILENAME --strip-components=1
    else
        log_warn "$FILENAME already extracted"
    fi
}

download "$@"