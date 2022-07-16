/*
    Notes & Examples about Streams in NodeJS

    NodeJS Stream Documentation:
        https://nodejs.org/api/stream.html
    NodeJS Learn Documentation:
        https://nodejs.dev/learn/nodejs-streams

    All streams are instances of EventEmitter

    There are four fundamental stream types within Node.js:
        - Writable
            a stream you can pipe into, but not pipe from (you can
                send data, but not receive from it)
            Note that in servers, the typical `res` parameter is a writable stream.
        - Readable
            a stream you can pipe from, but not pipe into (you can
                receive data, but not send data to it). When you
                push data into a readable stream, it is buffered,
                until a consumer starts to read the data.
        - Duplex
            A duplex stream that can be used to modify or transform the data
            as it is written and read. You might also hear transform streams
            referred to as “through streams.”
        - Transform
            a Transform stream is similar to a Duplex, but the
            output is a transform of its input
*/
const Stream = require('node:stream');
// const stream = require('node:stream').promises;
const http = require('http');
const fs = require('fs');
const zlib = require("zlib");
const crypto = require("crypto");

/*
    Without Streams
    Serve a file over http
*/
function readFileAndServeWithoutStreams() {
    const server = http.createServer(function (req, res) {
        fs.readFile(`${__dirname}/symbol.md`, (err, data) => {
            res.end(data);
        });
    });
    server.listen(3000);
}
// readFileAndServeWithoutStreams()

/*
    With Streams
    Serve a file over http
*/
function readFileAndServeWithStreams() {
    const server = http.createServer((req, res) => {
        const stream = fs.createReadStream(`${__dirname}/symbol.md`);
        stream.pipe(res);
    });
    server.listen(3000);
}
// readFileAndServeWithStreams()

/*
    Readable Stream Example 1

    Manually push into the readable stream. Won't do anything though
    because nothing is reading from it.
*/
function readableStreamExample_One() {
    const readableStream = new Stream.Readable();
    // This is NOT a handler for when it's written to.
    readableStream._read = () => { };
    // Could have done this instead:
    // const readableStream = new Stream.Readable({
    //     read() { },
    // });
    // You can listen for messages to be written to it with this event
    readableStream.on('readable', () => {
        // If the end of the stream has been reached, calling stream.read()
        // will return null and trigger the 'end' event.
        console.log('readable stream event', readableStream.read());
    });
    readableStream.push('druid');
    readableStream.push('mage');
}
// readableStreamExample_One()

/*
    Writable Stream Example 1

    Pipe stdin into the writable stream.
*/
function writableStreamExample_One() {
    const writableStream = new Stream.Writable();
    writableStream._write = (chunk, encoding, next) => {
        console.log(chunk.toString() + ":::");
        next();
    };

    // You can directly write to a writable stream like this
    // writableStream.write('Frost Mage')
    // Or pipe some stream to the writable (stdin is a Duplex stream)
    process.stdin.pipe(writableStream);
}
// writableStreamExample_One()

/*
    Combine a custom readable stream and a custom
    writable stream with pipe()
*/
function useReadAndWriteTogetherExample_One() {
    const readableStream = new Stream.Readable({
        read() { },
    });
    const writableStream = new Stream.Writable();

    // Handle when something is written to the writable stream
    writableStream._write = (chunk, encoding, next) => {
        console.log(chunk.toString() + ":::");
        next();
    };
    readableStream.pipe(writableStream);
    readableStream.push('druid');
    readableStream.push('mage');
}
// useReadAndWriteTogetherExample_One()

/*
    Closing a stream (and listening for the event)
    Output:
        druid
        mage
        ended
*/
function closeAStreamAndHandleEvent() {
    const readableStream = new Stream.Readable({
        read() { },
    });
    const writableStream = new Stream.Writable();

    writableStream._write = (chunk, encoding, next) => {
        console.log(chunk.toString());
        next();
    };

    readableStream.pipe(writableStream);

    readableStream.push('druid');
    readableStream.push('mage');

    readableStream.on('close', () => writableStream.end());
    writableStream.on('close', () => console.log('ended'));

    readableStream.destroy();
}
// closeAStreamAndHandleEvent()

/*

    transform streams are Duplex streams.
*/
function transformStreamExample() {
    /*
        chunk -
            Usually a buffer unless we configure the stream differently
        encoding -
            encoding argument is needed in that case, but we can usually ignore it.
        callback -
            The callback is a function that we need to call after we're
            done processing the data chunk. It's what signals whether
            the write was successful or not. To signal a failure,
            call the callback with an error object.
    */
    const transformStream = new Stream.Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().toUpperCase().replaceAll('E', '3'));
            callback();
        }
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
}
// transformStreamExample()

/*

*/
function duplexExample_One() {
    const inoutStream = new Stream.Duplex({
        // If something writes TO this stream
        write(chunk, encoding, callback) {
            console.log(chunk.toString() + "::::");
            callback();
        },

        // If this stream is piped to a second, then the second will call
        // this read() to request some data.
        read(size) {
            this.push(String.fromCharCode(this.currentCharCode++));
            if (this.currentCharCode > 90) { // 90 = 'Z'
                this.push(null);
            }
        }
    });

    inoutStream.currentCharCode = 65; // 65 = 'A'

    // Right from the start, stdout will call read(), which will get the A-Z
    // But since it's also consuming stdin, it will continue to wait for user input
    // If, on the terminal, you actually echo "asfd" | node ./nodejs_streams.js,
    // then it seems that the echo will come at the end, after A-Z.
    // If you just run the file, the terminal will stay open.
    // If you echo "abc" | and pipe to this file, the terminal will close
    process.stdin.pipe(inoutStream).pipe(process.stdout);

    // Since nothing pipes TO inoutStream, stdout will just call read(), get A-Z,
    // then get null, close, and the terminal will not stay open.
    // inoutStream.pipe(process.stdout);
}
// duplexExample_One()

/*
    node ./nodejs_streams.js ./symbol.md
*/
function pipeMultipleThingsTogetherTransform() {
    const filePath = process.argv[2];

    const transform_reportProgress = new Stream.Transform({
        transform(chunk, encoding, callback) {
            process.stdout.write(".");
            // Rather than this.push(chunk), can use second argument of callback()
            callback(null, chunk);
        }
    })
    const key = crypto.scryptSync("secret_key", 'some_salt', 24)
    const iv = Buffer.alloc(16, 0);
    function encrypt_file () {
        // To compress and encrypt a file
        fs.createReadStream(filePath)
            .pipe(zlib.createGzip())
            .pipe(crypto.createCipheriv("aes192", key, iv))
            // pipe to a transform stream...
            .pipe(transform_reportProgress)
            // ...or just listen to the "data" event:
            // .on("data", () => process.stdout.write("."))
            .pipe(fs.createWriteStream(filePath + ".zz"))
            .on("finish", () => console.log("\nFile Saved!"));
    }
    encrypt_file()
    
    // If you want to uncompress and unencrypt this file, you'd use
    // the streams in reverse order:
    function decrypt_file () {
        fs.createReadStream(filePath + ".zz")
            .pipe(crypto.createDecipheriv("aes192", key, iv))
            .pipe(zlib.createGunzip())
            .on("data", (chunk) => {
                process.stdout.write(chunk)
            })
            .on("finish", () => console.log("\nFile Read!"));
    }
    // decrypt_file()
}
pipeMultipleThingsTogetherTransform()