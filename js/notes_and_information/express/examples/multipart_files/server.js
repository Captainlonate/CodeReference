import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const app = express()

// parse application/json
// app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
// Seems to apply to when you submit a form (has nothing to do with ?data=stuff)
// app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))

app.get('/somehtml', (req, res) => {
    // req.query does not rely on bodyParser for anything.
    // You can use ?data=stuff just fine.
    console.log('query', req.query)

    // res.writeHead(301, {
    //     Location: 'https://www.gamestop.com',
    //     'Cache-Control': 'no-cache'
    // })
    // res.end()

    // res.redirect('https://www.bestbuy.com')

    // You cannot call res.send() twice.
    // res.send() defaults the content-type to text/html
    res.send('<h1>The Headers</h1>')
    
    // Access to underlying stream
    // res.status(200).type('html')
    // res.write('<h1>The Header Tag</h1>')
    // res.write('<p>The Content</p>')
    // res.end()
})

app.post('/api/uploadfile', upload.single('nm_some_file'), (req, resp) => {
// app.post('/api/*', upload.none(), (req, resp) => {
    console.log('==============================================')
    console.log('================ RECEIVED A POST =============')
    console.log('==============================================')
    console.log(`URL: '${req?.url}'`)
    console.log('Content-Type:', req?.headers['content-type'])
    console.log('Body:', req?.body) // req.body['my_field']
    console.log('File:', req?.file)
    console.log('==============================================')
    resp.json({ wasOk: true })
})

const EXPRESS_PORT = 1337
app.listen(EXPRESS_PORT, () => {
    console.log(`Listening on port ${EXPRESS_PORT}`)
})