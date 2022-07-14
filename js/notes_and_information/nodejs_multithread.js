const dns = require('node:dns');
const crypto = require('crypto')
const https = require('https')
/*
  The https module does not use the thread pool (but some DNS functions do)
  OS Task
    DNS.resolve()
      Does not use getaddrinfo(3) and they always perform a DNS
      query on the network. This network communication is
      always done asynchronously, and does not use libuv's threadpool.
      dns.resolve('https://slots.pirated.technology/', (err, addresses) => {
        console.log('addresses', addresses)
      })

  ThreadPool
    FS and Crypto modules use the threadpool
    DNS.lookup()
      it is implemented as a synchronous call to getaddrinfo(3)
      that runs on libuv's threadpool. consider resolving the
      host name to an address using dns.resolve() and using
      the address instead of a host name.
      DNS.lookup() can block filesystem IO
*/

/*
  This is an example of how NodeJS is multi threaded.
  This is how you change the threadpool size.

  If one pbkdf2 takes 420ms by itself, then how can 6 of
  them all finish in 500ms if it's single threaded.
*/
// process.env.UV_THREADPOOL_SIZE = 4
function THREADPOOL_CRYPTO_EXAMPLE () {
  const start = Date.now()
  for (let i = 1; i <= 6; i++) {
    crypto.pbkdf2('pass', 'salt', 100000, 512, 'sha512', () => {
      console.log(`pbkdf2 ${i}: `, Date.now() - start)
    })
  }
}
THREADPOOL_CRYPTO_EXAMPLE()


/*
  NOTE!
    MY MACBOOK IS CACHING DNS FOR over 1 minute
    THE FIRST TIME I RUN dns.lookup(), it takes like 300ms
      for every iteration.
    But the next time i run the script, it's like 5 ms for each.
    It goes back to 300ms after a few minutes of not running it.
    dns.lookup('https://slots.pirated.technology', (err, res) => {
      console.log(`DNS Lookup: `, res, Date.now() - networkStart)
    })
*/
function HTTP_OSTASK_EXAMPLE () {
  function doRequest () {
    const networkStart = Date.now()
    // If you use the Domain Name, it will use dns.lookup() on the thradpool
    // So, if you have other work already being done on the threadpool, it will delay
    // the execution of this. Likewise, this will delay File IO
    https.request('https://slots.pirated.technology', (res) => {
      res.on('data', () => {})
      res.on('end', () => {
        console.log(`Network Request: `, Date.now() - networkStart)
      })
    }).end()
  }

  doRequest()
  doRequest()
  doRequest()
  doRequest()
  doRequest()
  doRequest()
}
HTTP_OSTASK_EXAMPLE()