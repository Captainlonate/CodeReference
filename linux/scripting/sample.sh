#!/usr/bin/zsh

show_usage() {
    echo "$0 <log_level_int> <log_message_str>"
    exit 1
}

logMsg() {
    message_level=$1
    message_itself=$2
    if [ $message_level -le $LOG_LEVEL ]; then
        case $message_level in
            0) message_level_text="Error" ;;
            1) message_level_text="Warning" ;;
            2) message_level_text="Info" ;;
            3) message_level_text="Debug" ;;
            *) message_level_text="Other"
        esac
        echo "${message_level_text}: $message_itself"
    fi
}

# Notice that "$LOG_LEVEL" is in double quotes
if [ -n "$LOG_LEVEL" ]; then
    logMsg $1 $2
    exit 0
else
    echo "LOG_LEVEL is not set." 1>&2
    exit 1
fi

