# awk Command

_`awk` considers space delimited words to be separate fields by default._

_Awk is abbreviated from the names of the developers – Aho, Weinberger, and Kernighan._

### Just print the contents of a file

```bash
awk '{print}' sample_text.txt
# Is the same as cat sample_text.txt
```

### Print the first field of each line

You can use `$0`, `$1`, `$2`, etc. Again, it's looking for spaces to delimit fields by default.

```bash
# Apple, Dell, Dell, Lenovo
awk '{print $1}' sample_text.txt
```

### Print more than one field, each separated by a space

```bash
awk '{print $1,$3}' sample_text.txt
```

### Operate on the output of another command

```bash
ls -l | awk '{print $1}'
```

### Print the last field of each line

_`$NF` means number of fields, which means "the last field" basically_

```bash
awk '{print $NF}' sample_text.txt
```

### Use a different delimiter

_`awk` looks for spaces to delimit each field, per line. But you can change it to use a different delimiter. Use `-F',' to use commas`_

```bash
# Use commas instead of spaces
awk -F',' '{print $1}' sample_text.txt
```

### printf

Here's an example using `printf` to add a newline and tab to the output.

```bash
grep -inr "ps1=" ~/.oh-my-zsh | awk -F':' '{ printf "%s (%s)\n\t%s\n\n", $1, $2, $3 }'
```

### Print a field only if some logic

_Only print the first two columns, if the third column (which is a number), is greater than or equal to 45._

```bash
# Remove the first line of the csv, which are column titles
tail -n +2 ./sample_wow.csv | awk -F',' '$3 >= 45 {print $1"_"$2}'
```

### Sum up a numerical column

```bash
# Remove the first line of the csv, which are column titles
tail -n +2 ./sample_wow.csv | awk -F',' '{ sum += $3; } END { print sum; }'
```

### Find the slowest unit tests

_First need to output vitest results to a file testresultsoutput.txt_

```bash
yarn test --silent > testresultsoutput.txt
```

```bash
# Grep for lines that contain the string: "✓ src/"
# Remove anything between parenthesis, including the parenthesis from each line
# Reduce multiple spaces into a single space
# Remove some characters at the beginning of each line
# Rearrange the space delimited columns to be:
#   10ms 55MB file/path.ts
# Sort them by either the first column (speed) -k1, or second (heap) -k2 numerically -V.
# Just take the last 10 lines (the highest numbers)
grep "✓ src/" testresultsoutput.txt | sed -e 's/([^()]*)//g' | tr -s ' ' | cut -c 4- | awk '{ printf "%s %s%s %s\n", $2, $3, $4, $1 }' | sort -V -k 2 | tail -10
```
