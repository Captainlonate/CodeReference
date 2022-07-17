/*
  Found some of this code from Kyle Simpson:
    https://www.youtube.com/watch?v=Qg1SvpIau6U&t=1
*/

function log (anything) {
  console.log("Logged:", anything)
}

function fakeAjax (url, cb) {
  const urls = {
    file1: "File One Contents",
    file2: "File Two Contents",
    file3: "File Three Contents",
  }

  const someAmountOfTime = Math.round(Math.random() * 400)

  log(`Fetching ${url}. Will take ${someAmountOfTime}ms.`)

  setTimeout(function () {
    cb(urls[url])
  }, someAmountOfTime)
}

function getFileUsingPromises(url) {
  return new Promise((resolve) => {
    fakeAjax(url, resolve)
  })
}

// =============================================

/*
  Three promises will run concurrently, and resolve at random times.
  We want to process them in the correct order: 1, 2, 3.
  We don't wait for all 3 to resolve, before processing them, if they happen
  to finish in the correct order.

  Using Promise Chains
*/
function sequenceMultiplePromises () {
  // Issue all 3 "network" calls concurrently
  const promise_file1 = getFileUsingPromises('file1')
  const promise_file2 = getFileUsingPromises('file2')
  const promise_file3 = getFileUsingPromises('file3')

  // But handle them in-order, but as soon as they complete (in order)
  // Note that you don't have to explicitly return a promise, for the next .then()
  // to be called. .then(log) does not explicitly return another promise
  promise_file1
    .then(log)
    .then(function (value1) {
      return promise_file2
    })
    .then(log)
    .then(function () {
      return promise_file3
    })
    .then(log)
    .then(function () {
      log("All Promises Complete!")
    })
}



// =============================================
// =================Run Examples================
// =============================================
sequenceMultiplePromises()