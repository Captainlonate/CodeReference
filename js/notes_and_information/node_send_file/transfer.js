const net = require("node:net")
const fs = require('fs')
const path = require('node:path')

// ==============================================

const CONFIG = {
  listen: {
    port: 8000,
    address: '0.0.0.0'
  },
  file: {
    prefix: 'streamed__'
  },
  args: {
    commands: {
      send: {
        description: 'Connect to "listen", and send a file.',
        subDescription: 'send <ipAddress> <filePath>',
      },
      listen: {
        description: 'Listen for a connection, write file to disk.',
        subDescription: 'listen',
      }
    }
  }
}

/*
  Entry point to the program
*/
run()

// ==============================================

function printHelp () {
  console.log('')
  console.log(`Usage: node ${path.basename(process.argv[1])} <command> [options]`)
  console.log('')
  console.log('Commands:')
  for (const [cmdKey, cmdCfg] of Object.entries(CONFIG.args.commands)) {
    console.log(`    ${cmdKey}\t${cmdCfg.description}`)
    console.log(`    \t\tUsage: ${cmdCfg?.subDescription}`)
    console.log('')
  }
  console.log('')
}

/*
  
  process.argv[0]: '/usr/local/bin/node'
  process.argv[1]: <path to this file>
  process.argv[2]: command: 'listen' | 'send'
  process.argv[3]: options: 
*/
function processArgs () {
  return {
    command: {
      command: process.argv[2],
      isValid: (
        typeof process.argv[2] === 'string' &&
        Object.keys(CONFIG.args.commands).includes(process.argv[2])
      )
    },
    options: process.argv.slice(3)
  }
}

// ==============================================

function run () {
  const cli_args = processArgs()

  switch (cli_args.command.command) {
    case 'listen':
      listen()
      break;
    case 'send':
      if (!cli_args.options[0] || !cli_args.options[1]) {
        console.log('Invalid [options]')
        printHelp()
      } else {
        send(...cli_args.options)
      }
      break;
    default:
      console.log('Invalid <command>.')
      printHelp()
  }
}

// ==============================================

/*
  Run in "listen" mode.
*/
function listen () {
  let server;
  server = net.createServer(socket => {
    console.log('Listen::Log::Receiving a file....')

    let fileSizeBytes = 0
    let writeStream = null;
    let hasReceivedFiledName = false

    socket.on('error', (e) => {
      console.log('Listen::Error::', e)
      writeStream.close()
      socket.close()
      // server.close()
    })

    /*
      Default max chunk size seems to be: 65536 bytes
    */
    socket.on('data', (chunk) => {
      if (!hasReceivedFiledName) {
        const chunkString = chunk.toString('utf8')
        if (chunkString.includes('%%%FILENAME=')) {
          const fileName = chunkString.split('=')[1]
          if (typeof fileName === 'string' && fileName.trim().length > 0) {
            hasReceivedFiledName = true
            writeStream = fs.createWriteStream(`./dest_files/${CONFIG.file.prefix}${fileName.trim()}`)
            socket.write('%%%RECEIVED_FILENAME')
          } else {
            console.log('Listen::Error::Did not receive a valid filename.', chunkString)
          }
        }
      } else {
        fileSizeBytes += chunk.length
        writeStream.write(chunk)
      }
    })

    /*
      1-'end', 2-'finish', 3-'close'
    */
    socket.on("end", () => {
      console.log(`Listen::Log::Transferred ${fileSizeBytes.toLocaleString("en-US")} bytes. (${(fileSizeBytes / (1024 * 1024)).toFixed(3)} MB)`)
      // Stop listening for connections
      // server.close()
    })
  })

  server.listen(CONFIG.listen.port, CONFIG.listen.address);
}

// ==============================================

/*
  Run in "send" mode.
*/
function send (ipAddress = 'localhost', filePath) {
  const client = new net.Socket()
  let fileStream = null

  if (!fs.existsSync(filePath)) {
    console.log(`Send::Error::Could not find file "${filePath}"`)
    return
  }

  // Send a connection request to the server.
  client.connect(
    {
      port: CONFIG.listen.port,
      host: ipAddress
    },
    () => {
      console.log(`Send::Log::"Connection to server established."`)
      
      fileStream = fs.createReadStream(filePath)
      
      const fileName = path.basename(filePath)
      console.log(`Send::Log::"Sending Filename: '${fileName}'"`)
      client.write(`%%%FILENAME=${fileName}`)
    }
  )

  client.on('data', function(chunk) {
    if (chunk.toString('utf8') === '%%%RECEIVED_FILENAME') {
      console.log('Send::Log::"Server has received Filename. Streaming file."')
      // Once complete, this will send a close event
      if (fileStream) {
        fileStream.pipe(client)
      }
    }
  })

  client.on('error', function (err) {
    console.log(`Send::Error::${err.code}::"${err.message}"`)
  })

  client.on('end', function () {
    console.log(`Send::Log::"Transfer Complete!"`)
  })
}