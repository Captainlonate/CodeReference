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

### Complex Example

- Match lines that start with spaces and checkmark (checkmarks are 3 bytes)
  - `/^ ✓ src/`
- Remove the first 5 characters from each line
  - `$0 = substr($0, 6)`
- Find and remove all () and everything between the ()
  - `gsub(/\([^)]*\)/, "")`
- Rearrange the columns and format them

Assume you have a file where some of the lines are unit test results from something like vitest. To get this you might run `yarn test --silent --logHeapUsage > testResults.txt`:

```
 ✓ src/some/path/to/some/testfile.test.tsx  (16 tests | 2 skipped) 15ms 75 MB heap used
```

And your objective is to get:

```
15ms 75mb src/some/path/to/some/testfile.test.tsx
```

```bash
awk '/^ ✓ src/{$0 = substr($0, 6); gsub(/\([^)]*\)/, ""); printf("%s %smb %s\n", $2, $3, $1)}'
```

There's no reason you can't break this up into a separate file like `awkScript.awk` and `awk -f ./awkScript.awk testResults.txt`:

```awk
/^ ✓ src/ {
  $0 = substr($0, 6)
  gsub(/\([^)]*\)/, "")
  printf("%s %smb %s\n", $2, $3, $1)
}
```