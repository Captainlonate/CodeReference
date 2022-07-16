import http from 'http'

// =======================================================

const HEADERS = {
  contentType: 'Content-Type',
  contentDisposition: 'Content-Disposition'
}

const CONTENT_TYPES = {
  json: "application/json",
  csv: "text/csv"
}

const CONFIG = {
  port: 8000,
  host: 'localhost'
}

// =======================================================

const requestListener = function (req, res) {
  res.setHeader(HEADERS.contentType, CONTENT_TYPES.json)
  res.writeHead(200)
  res.end(`{"message": "This is a JSON response"}`);
};


const server = http.createServer(requestListener);
server.listen(CONFIG.port, CONFIG.host, () => {
    console.log(`Server is running on http://${CONFIG.host}:${CONFIG.port}`);
});