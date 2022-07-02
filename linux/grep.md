# grep Command

### Basic Usage

```bash
# Every line that has "Dell" in it
grep "Dell" ./sample_text.txt
```

### Exclude the search term with -v

```bash
# Every line that DOES NOT have "Dell" in it
grep -v "Dell" ./sample_text.txt
# ls, but exclude anything that starts with a number
ls /proc | grep -v -E "^[0-9]+"
```

### Show line numbers of each match

```bash
# EX: 2:Dell XPS_17 $2,754.00
grep -n "Dell" ./sample_text.txt
```

### Case INSensitive Search

```
grep -i "Dell" ./sample_text.txt
```

### Search through multiple files

_It does not descend into subdirectories._

_Prepends filename:linenumber: to the beginning of each match._

```
# EX: grep.md:6:# Every line that has "Dell" in it
grep -in "Dell" *
```

_You can recursively search through subdirectories with `-r`_

```
# EX: ./subdir/somefile.txt:6:# Every line that has "Dell" in it
grep -inr "Dell" .
```

### Modes (Basic, Extended, PCRE)

_On linux, `grep` understands 3 different versions of regular expression syntax: "basic (BRE)", "extended (ERE)" and "perl (PCRE)". However, this is not true for OSX._

_On OSX, `grep` is used for basic regular expressions, and `egrep` is used for extended. But you can use `grep -E` to force `grep` to behave like `egrep`. Again, this is for OSX. This means that on OSX, with just `grep`, `.+` will NOT match 1 or more occurences. But `.\+` will. But if you use `-E`, then you don't have to escape the `+`_

_Without `-E`, grep will interpret `?`, `+`, `{`, `|`, `(`, and `)` as literal characters._

```bash
# Want to match "dell Alienware" and "dell_Alienware", but not "dellAlienware"
grep "dell.\+Alienware" *
grep -E "dell.+Alienware" *
```