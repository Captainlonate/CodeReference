# cut command

_The sample\_wow.csv file is in this directory._

```bash
# 92 ./sample_wow.csv
wc -c ./sample_wow.csv
```

### omit the first segment OF EACH LINE

```bash
# -d, or -d',' (Split the string on commas)
# -f2- indicates the second field, until the end (similar to JS's array.slice(1))
cut -d',' -f2- ./sample_wow.csv
```

### Specify range of fields

```bash
# Don't technically need the quotes
cut -d',' -f'2-3' ./sample_wow.csv
```

### Cutting by characters

```bash
# Give me the 5th character OF EACH LINE
cut -c 5 ./sample_wow.csv
# Give me the 5th character OF EACH LINE until the end of the line
cut -c 5- ./sample_wow.csv
# Give me the 5th, 6th, and 7th characters, OF EACH LINE
cut -c 5-7 ./sample_wow.csv
```

### Skip the first line

_If you were working with a csv file, you might want to skip the column titles, in the first line_

```bash
# Skip the column titles, and get the first column of each row
# Unfortunately, this approach is SIGNIFICANTLY lower performance than using tail
# when working on large files. So, use tail instead.
sed '1d' ./sample_wow.csv | cut -d',' -f1
# -n +2 means start with line 2, until the end
tail -n +2 ./sample_wow.csv | cut -d',' -f1
```