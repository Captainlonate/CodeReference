# Control Flow

## if...else
```
let a = 99;
if a > 200 {
  println!("Over 200");
} else if a > 99 {
  println!("Over 99");
} else {
  println!("Small Number");
}
```
_It is possible to set a variable equal to an if expression_
```
let my_num = 5;
let is_lt_5 = if my_num < 5 {
  true
} else {
  false
};
```

## loop
_Infinite loop until 'break'_
```
let mut num = 0;
loop {
  if num == 5 {
    break;
  }
  println!("{:?}", num);
  num = num + 1;
}
```

## while loop
```
let mut num = 0;
while num < 5 {
  println!("{:?}", num);
  num = num + 1;
}
```

## match
_If you don't handle a possible option (and don't have the \_), the compiler will fail_
```
let some_int = 5;
match some_int {
  1 => println!("it's 1"),
  2 => println!("it's 2"),
  3 => println!("it's 3"),
  _ => println!("it's something else"),
}
```
_It is possible to set a variable equal to a match expression_
```
let my_num = 5;
let message = match my_num {
  1 => "hello",
  _ => "goodbye"
};
```