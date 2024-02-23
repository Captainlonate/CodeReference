# Run a command multiple times

_An example of running a command 2 times, printing the output to a file using the index_

```bash
# script.sh
mkdir -p ./testtimeresults/

for i in {1..2}; do
  echo "Test Run #$i";
  yarn test --silent > ./testtimeresults/test_$i.txt 2>&1;
done
```
