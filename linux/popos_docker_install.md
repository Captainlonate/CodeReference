# Pop OS (22.04) Docker Installation

### Pop OS 22.04

_PopOS 22.04 is based on Ubuntu 22.04 (jammy jellyfish). So, you'll see the nomer "jammy" used when you run `lsb_release -a`_

```bash
lsb_release -a
# Output
# Distributor ID:	Pop
# Description:	Pop!_OS 22.04 LTS
# Release:	22.04
# Codename:	jammy
```

_For that reason, we're going to install this as if we're ubuntu (ubuntu gpg key, ubuntu release deb)_

### Steps

```bash
# Make sure it's not installed (delete what you have)
sudo apt-get remove docker docker-engine docker.io containerd runc

sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# -p will only create it, if it doesn't exist
sudo mkdir -p /etc/apt/keyrings

#
# Ubuntu (even though we're on PopOS)
# This will create (or overwrite) the file: /etc/apt/keyrings/docker.gpg
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# This will create and overwrite the file: /etc/apt/sources.list.d/docker.list
# It's contents should show:
#   deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu jammy stable
# See how it's using 'jammy'
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# This is important, pay attention to the output, you should see either "Hit" or "Get" next to the new repo
# There should be no errors shown at the end.
# The docs say that you might get a "GPG Error" when running this, and if so, you need to set permissions:
#   sudo chmod a+r /etc/apt/keyrings/docker.gpg
# I didn't have to though.
sudo apt-get update
```

_Now, go get the latest `.deb` of Docker Desktop For Linux. Download it._

```bash
cd ~/Downloads
sudo apt install ./docker-desktop-4.10.0-amd64.deb

# At the end, i received this error (which the docs say you can ignore.)
# N: Download is performed unsandboxed as root as file
# '/home/sarat/Downloads/docker-desktop-4.10.0-amd64.deb' couldn't be accessed
# by user '_apt'. - pkgAcquire::Run (13: Permission denied)
```

_At this point, it's installed. You can go to Applications and click on the whale. You should not need to use the following command._

```bash
systemctl --user start docker-desktop
```

_You can check the versions installed_

```bash
# Docker Compose version v2.6.1
docker compose version
# Docker version 20.10.17, build 100c701
docker --version
# Client: Docker Engine - Community
#  Version:           20.10.17
#  API version:       1.41
#  Go version:        go1.17.11
#  Git commit:        100c701
#  Built:             Mon Jun  6 23:02:46 2022
#  OS/Arch:           linux/amd64
#  Context:           desktop-linux
#  Experimental:      true
# 
# Server: Docker Desktop 4.10.0 (82025)
#  Engine:
#   Version:          20.10.17
#   API version:      1.41 (minimum version 1.12)
#   Go version:       go1.17.11
#   Git commit:       a89b842
#   Built:            Mon Jun  6 23:01:23 2022
#   OS/Arch:          linux/amd64
#   Experimental:     false
#  containerd:
#   Version:          1.6.6
#   GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
#  runc:
#   Version:          1.1.2
#   GitCommit:        v1.1.2-0-ga916309
#  docker-init:
#   Version:          0.19.0
#   GitCommit:        de40ad0
# You need to actually be running docker desktop for linux to get the full output of this...
sudo docker version
```

### To enable Docker Desktop to start on login

```bash
systemctl --user enable docker-desktop
```

### To stop Docker Desktop, either use the system tray icon, or:

```bash
systemctl --user stop docker-desktop
```

### Uninstall or Upgrade or Docs:

[Docs](https://docs.docker.com/desktop/linux/install/ubuntu/#upgrade-docker-desktop)