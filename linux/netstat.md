# netstat command

`netstat` is different on OSX than on Linux.

## OSX

On OSX, there is no `-tu` like on Linux. But you can instead use `-p tcp` or `-p udp`, but not at the same time.

```bash
netstat -p tcp -van | grep '^Proto\|LISTEN'
```

_`-v` will add a "pid" column so you can see which process is listening on that port._

_normally sockets used by server processes are not shown. `-a` will add them._

_`-n` will rewrite the domain (and device names) with ip addresses. But in some cases it's helpful to be able to see the name of a device (Such as nathaniels-ipad..50328)_

_`grep`ping for Proto will capture the column titles, and LISTEN will only show processes listening on sockets (and will not show ESTABLISHED connections)_

## Linux

```bash
sudo netstat -p -at
```