# find Command

### Basic Usage

_Find objects by name_

_Make sure to wrap the matching pattern in quotes or it won't recurse. Without the quotes, the shell expands it to a glob pattern for each file in that directory. Use quotes._

```bash
# find . -name '*.txt'
find /some/directory -name '*.txt'
```
