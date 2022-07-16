# gzip command

__Working with one file__

```bash
# Compress one file
gzip myfile.txt
# See the compression ratio (how much it was compressed by)
# 77% means it reduced the file size by 77%, new file size is 23% of the original
# -lv will show more information, like date and time, compression method
gzip -l myfile.txt.gz
# Uncompress the one file, using either of these:
gzip -d myfile.txt.gz
gunzip myfile.txt.gz
```

__Working with a directory__

_gzip cannot compress a directory by itself. Use it with `tar` (tape archive)._

```bash
# Create the Archive
# -c to create a new archive
# -z will use gzip compression automatically
# -f specify the file name
# -v list each file name
tar -czvf name_the_tarball.tar.gz my_directory/

# Uncompress the Archive
# -x extract the contents
# This will create the directory, in the current directory
tar -xzvf the_tarball.tar.gz
```