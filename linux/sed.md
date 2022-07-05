# sed Command

_sed is used to find/replace text within files._

### Basic Usage

_This will find every occurence of a string and replace it with another string. It will print the result to the terminal. It actually won't write the result back to the file._

_The `s` stands for "substitute command"._

```bash
sed 's/HP/HewlettPackard/' ./sample_text.txt
```

_To change the contents of the file in-place (overwrite), use `-i`_

__For some reason, on OSX, you have to use an empty string after -i. `-i ''`__

```bash
sed -i '' 's/HewlettPackard/HP/' ./sample_text.txt
# sed -i '' 's/HP/HewlettPackard/' ./sample_text.txt
```

### Delimiter of the command

_The character after the 's' is the delimiter of your find and replace segments. You may want to change that if you're trying to replace something with that character._

Example:

```bash
# Find "Hewlett/Packard", and replace with "Hewlett_Packett"
sed 's|Hewlett/Packard|Hewlett_Packett|' ./sample_text.txt
```

### Replace spaces with commas for all occurences

```bash
# technically -E is not required here, /g means all occurrences
sed -E 's/ /,/g' ./sample_wow.csv
```

### Delete the first line

```bash
# Delete line number 1, '2d' would be line number 2.
sed '1d' ./sample_wow.csv
```

### Using Character Classes

_I wasn't able to figure out how to use character classes in the replacement portion._

```bash
# "The phone number is: (___) ___-____"
echo "The phone number is: (123) 456-7890" | sed 's/[[:digit:]]/_/g'
```

### Transliterate

```bash
# "ThIs Is A shOrt strIng Of tExt."
# It behaves like the tr command: tr 'aeiou' 'AEIOU'
echo "This is a short string of text." | sed -e 'y/aeiou/AEIOU/'
```