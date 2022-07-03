# Shell Scripting with Bash

### Variables

_Don't add spaces around the `=` symbol._

_String literals can be single or double quotes. But, you need double quotes for variable expansions. You need double quotes for globbing (* and ?)_

_Backticks are similar to double quotes, but they can also execute the contents as a shell command, and replace the string with the command's output. You can insert backticks within a double quoted string._

```bash
character_name='Competitor'
character_class="druid"
echo "${character_name}'s class is a ${character_class} as of '`date +'%D'`'."
```

### Arguments

_`$#` tells you how many arguments were passed in._

```bash
if [ $# -eq 0 ]; then
else
fi
```

_`$0` is the name by which the script was invoked._

_`$1` is the first command-line argument, and so on..._

_`$*` gives all the arguments at once._

### If

_`-n` checks if the variable is a string, and not null._

```bash
if [ -n "$user_name" ]; then
    echo "Hello $user_name!"
    exit 0
else
    echo ""
    exit 1
fi
```

__`sh` Comparison Operators__

_Note **: the `<` and `>` must be backslash-escaped or double bracketed to prevent interpretation as an input or output redirection character._

String | Numeric | True if |
-------|:-------:|--------:|
x = y | x -eq y | x is equal to y |
x != y | x -ne y | x is not equal to y |
x < y __**__ | x -lt y | x is less than y |
n/a | x -le y | x is less than or equal to y |
x > y __**__ | x -gt y | x is greater than y |
n/a | x -ge y | x is greater than or equal to y |
-n x | n/a | x is not null |
-z x | n/a | x is null |

__`sh` File Evaluation Operators__

Operator | True if|
---|---|
-d _file_ | _file_ exists and is a directory |
-e _file_ | _file_ exists |
-f _file_ | _file_ exists and is a regular file |
-r _file_ | User has read permission on _file_ |
-s _file_ | _file_ exists and is not empty |
-w _file_ | User has write permission on _file_ |
_file1_ -nt _file2_ | _file1_ is newer than _file2_ |
_file1_ -ot _file2_ | _file1_ is older than _file2_ |

### Case

