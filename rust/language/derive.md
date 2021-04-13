# Derive Macro

_Derive debug printing functionality, which will allow complicated structures to be printed with `println!("{:?}")`_
`#[derive(Debug)]`

## derive(Debug) Used on enums
_When used on enums, the string version of the variant will be printed._
```rust
#[derive(Debug)]
enum Position {
  Manager,
  Supervisor,
  Worker
}
```

## derive(Debug) Used on structs
_When used on structs, it will look like this:_

_`Employee { position: Worker, work_hours: 40 }`_
```rust
#[derive(Debug)]
struct Employee {
  position: Position,
  work_hours: i64
}
```

## derive(Clone, Copy)

_When a move would normally occur, instead the data will be copied._

```rust
#[derive(Clone, Copy)]
enum Position {
  Manager,
  Supervisor,
  Worker
}

```

_If a struct contains a property which has Clone and Copy, then the struct must also have Clone and Copy._
```rust
#[derive(Clone, Copy)]
enum Position {
  Manager,
  Supervisor,
  Worker
}

// This must have the derive, because it contains a position, which has it.
#[derive(Clone, Copy)]
struct Employee {
  position: Position,
  work_hours: i64
}
```