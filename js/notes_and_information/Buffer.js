const { Buffer } = require('node:buffer')

/*
  Documentation:
    https://nodejs.org/api/buffer.html#buffer

  Buffer objects are used to represent a fixed-length sequence of bytes
  
  The Buffer class is a subclass of JavaScript's Uint8Array class and
  extends it with methods that cover additional use cases.
  Node.js APIs accept plain Uint8Arrays wherever Buffers are supported as well.

  Quick note on Hexadecimal:
    One hexadecimal character 'F' is the decimal 16. You need 4 bits
    to represent 16. '1111'. 
    Two hexadecimal characters 'FF' would be 8 bits ('1111 1111'), which is
    one byte.
    One UTF8 character requires 1 byte to represent.
    So that's why each character in the buffer is 1 byte, represented by
    2 hexadecimal characters.
    Example:
      Output: <Buffer 77 61 72 63 72 61 66 74 00 00>
      Hex 77 === Decimal 119 === ASCII & Unicode 'w'
  
  Note above where I said Buffers are subclasses of Uint8Arrays. Those are
  arrays of 8-bit unsigned integers. So, it makes sense that each element
  is a byte, represented by a two-character hexadecimal.

*/

// Creates a zero-filled Buffer of length 10.
// It can hold 10 bytes (10 utf8 characters)
const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10,
// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10, 1);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using fill(), write(), or other functions that fill the Buffer's
// contents.
const buf3 = Buffer.allocUnsafe(10);

// Creates a Buffer containing the bytes [1, 2, 3].
const buf4 = Buffer.from([1, 2, 3]);

// Creates a Buffer containing the bytes [1, 1, 1, 1] – the entries
// are all truncated using `(value & 255)` to fit into the range 0–255.
const buf5 = Buffer.from([257, 257.5, -255, '1']);

// Creates a Buffer containing the UTF-8-encoded bytes for the string 'tést':
// 'utf8' is the default encoding
// [0x74, 0xc3, 0xa9, 0x73, 0x74] (in hexadecimal notation)
// [116, 195, 169, 115, 116] (in decimal notation)
const buf6 = Buffer.from('tést');
const buf6_1 = Buffer.from('tést', 'utf8');

// Creates a Buffer containing the Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf7 = Buffer.from('tést', 'latin1');

/*
  Converting a buffer to a string
    Convert Buffer to String === decoding
    Convert String to Buffer === encoding
*/
const stringBuffer = Buffer.from('world of warcraft', 'utf8')
// Cannot simply console.log() it.
// 77 is the hex code, for the ascii 'w', with decimal 119, and binary: 01110111
// Output: <Buffer 77 6f 72 6c 64 20 6f 66 20 77 61 72 63 72 61 66 74>
console.log(stringBuffer)
// Output: 119   (the decimal for the ascii code 'w', whose hex is 77)
console.log(stringBuffer[0])
// Output: world of warcraft
console.log(stringBuffer.toString('utf8'))
// Output: 776f726c64206f66207761726372616674  (the 2-char hex codes joined together)
console.log(stringBuffer.toString('hex'))
// Output: d29ybGQgb2Ygd2FyY3JhZnQ=
console.log(stringBuffer.toString('base64'))

/*
  Manually writing to a buffer
*/
// By default, it's filled with ten hex codes: 00
const manualBuffer = Buffer.alloc(10)
// Output: <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log("Manual Buffer:", manualBuffer)
// Write to it, with nothing already there.
manualBuffer.write("warcraft") // 8 characters
// Output: <Buffer 77 61 72 63 72 61 66 74 00 00>
console.log("Manual Buffer:", manualBuffer)
// Write to it, after having written something already
// It will (over)write 5 characters, from the beginning
manualBuffer.write("druid") // 5 characters
// Output: <Buffer 64 72 75 69 64 61 66 74 00 00>
console.log("Manual Buffer:", manualBuffer)
// Write too much to the buffer (has 10 slots)
// This does not error, and fills all 10 slots, but what happens to the extra 4??
manualBuffer.write("warcraft world") // 14 characters
console.log("Manual Buffer:", manualBuffer)