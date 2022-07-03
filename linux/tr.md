# tr (translate) command

_Translate looks for CHARACTERS and replaces them with another set of CHARACTERS_

### Simple Example

```bash
# "WOrld Of wArcrAft Is thE gAmE wE plAy"
echo 'World of warcraft is the game we play' | tr 'aeiou' 'AEIOU'
# "W!rld !f wArcrAft !s th! gAm! w! plAy"
# (If you don't give it enough replace chars, it will use the last one)
echo 'World of warcraft is the game we play' | tr 'aeiou' 'A!'
# "Wrld f wrcrft s th gm w ply"
# -d will delete any occurrence of those characters
echo 'World of warcraft is the game we play' | tr -d 'aeiou'
# "Worldofwarcraftisthegameweplay"
echo 'World of warcraft is the game we play' | tr -d ' '
```

### Remove repeated characters

```bash
# "A hip kid might texxt like this."
# Notice that -s didn't "squeeze" to two "xx", since they weren't included in 'i e.'
echo 'A hiip kiiiid might    teeexxt liiike thiiiis....' | tr -s 'i e.'
```

### Using 'Character Classes'

```bash
# "SOME LOWERCASE TEXT"
echo 'sOme lowercAse text' | tr '[:lower:]' '[:upper:]'
# Generate a random password string, 15 characters long
# [:graph:] is all printable characters, not including space
# -d means delete anything in the pattern,
# -c means do the opposite of.
# -cd means, delete anything that is not included in the pattern
head -n 3 /dev/urandom | tr -cd '[:graph:]' | cut -c 1-15
```