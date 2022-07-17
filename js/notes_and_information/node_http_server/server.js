import http from "http"
import fs from "fs"

/*
  Documentation:
    https://nodejs.org/api/http.html#responseenddata-encoding-callback
*/

// =======================================================
// ==================CONSTANTS / CONFIG===================
// =======================================================

const HEADERS = {
  contentType: "Content-Type",
  contentDisposition: "Content-Disposition",
  attachment: (fileName) => `attachment;filename=${fileName}`,
  setCookie: 'Set-Cookie',
  cookie: (...cookies) => [...cookies]
}

const CONTENT_TYPES = {
  json: "application/json",
  csv: "text/csv",
  html: "text/html",
  jpg: "image/jpg",
  markdown: "text/markdown",
}

const CONFIG = {
  port: 8000,
  host: "localhost",
}

const FILENAMES = {
  homepage: "homepage.html",
  csv: "wow.csv",
  json: "wow.json",
  markdown: "Readme.md",
}

// =======================================================
// =====================HANDLERS==========================
// =======================================================

// Browser will download the csv file
const sendCSVFile = function (req, res) {
  const fileName = FILENAMES.csv
  res.writeHead(200, {
    [HEADERS.contentType]: CONTENT_TYPES.csv,
    [HEADERS.contentDisposition]: HEADERS.attachment(fileName),
  })
  fs.createReadStream(`./data/${fileName}`).pipe(res)
}

// Will display HTML in the browser
const sendJSONData = function (req, res) {
  res.writeHead(200, {
    [HEADERS.contentType]: CONTENT_TYPES.json,
  })
  res.end(
    JSON.stringify({
      characterName: "claws",
      class: "druid",
      level: 120,
    })
  )
}

// Will render as a normal HTML page
const sendHTMLFile = function (req, res) {
  const fileName = FILENAMES.homepage
  res.writeHead(200, {
    [HEADERS.contentType]: CONTENT_TYPES.html,
    [HEADERS.setCookie]: HEADERS.cookie('secret=sec_cookie', 'another=cookie_val')
  })
  // When the readable stream emits 'end', then stream.end() will be
  // called on the writable stream. We don't need to call res.end()
  fs.createReadStream(`./data/${fileName}`).pipe(res)
}

// Will render as a normal HTML page
const sendMarkdownFile = function (req, res) {
  const fileName = FILENAMES.markdown
  res.writeHead(200, {
    [HEADERS.contentType]: CONTENT_TYPES.markdown,
    [HEADERS.contentDisposition]: HEADERS.attachment(fileName),
  })
  fs.createReadStream(`./data/${fileName}`).pipe(res)
}

/*
  This (req, res) handler runs for every request.
*/
const server = http.createServer((req, res) => {
  req.on("error", (err) => {
    console.error("There was an error:::", err)
  })

  if (req.url === '/readme') {
    sendMarkdownFile(req, res)
  } else if (req.url === "/api/json/wow") {
    sendJSONData(req, res)
  } else if (req.url === "/api/csv/wow") {
    sendCSVFile(req, res)
  } else {
    sendHTMLFile(req, res)
  }
})

// =======================================================

server.listen(CONFIG.port, CONFIG.host, () => {
  console.log(`Server is running on http://${CONFIG.host}:${CONFIG.port}`)
})
