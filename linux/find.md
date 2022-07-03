# find Command

### Basic Usage

_Find objects by name_

_Make sure to wrap the matching pattern in quotes or it won't recurse. Without the quotes, the shell expands it to a glob pattern for each file in that directory. Use quotes._

```bash
# find . -name '*.txt'
find /some/directory -name '*.txt'
```

### Modified Time

_`-mtime`: +3, more than 3 days, -3 less than 3 days, 3, exactly 3 days_

```bash
# Find files with a modified time of less than 7 DAYS
find /var/log -mtime -7
# Find files with a modified time in that last 24 hours
find /var/log -mtime -0
```

### Type of file

```bash
# Files, directories or symbolic links
# This shorthand is the equivalent of:
#   find /tmp \( -type f -o -type d -o -type l \)
find /usr/bin -type f,d,l
```

### Execute a command for each file

_The braces are enclosed in single quote marks to protect them from interpretation as shell script punctuation._

_The semicolon is similarly protected by the use of a backslash, though single quotes could have been used in that case also._

```bash
# Execute the file command on each type file found in the current directory
find . -type f -exec file '{}' \;
```

_`-print` vs `-print0`._

```bash
# -print == print  the full file name on the standard output, followed by a newline.
find . -maxdepth 2 -type f -print | xargs wc -l
# -print0 == print the full file name on the standard output,
# followed by a null character (instead of the newline character
# that  -print  uses). This option corresponds to the -0 option of xargs.
find . -maxdepth 2 -type f -print0 | xargs -0 wc -l
```

### Search by file size

```bash
# Find files that are larger than 1 MB, and for each one,
# print it with it's human readable size. Can also use sizes 'k', 'M', 'G'
find . -type f -size +1M -exec du -h '{}' \;
```

### Use Regex

```bash
# Use a regex with -iregex to be case-insensitive
# You need to check for .* in the front, because it's actually matching the entire path.
# du -h will make the first column be a size, and sort -h can sort by sizes k,M,G
find / -type f -iregex '.*orcs.*' -exec du -h '{}' \; 2> /dev/null | sort -h
```