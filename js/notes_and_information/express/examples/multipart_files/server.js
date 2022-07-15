import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const app = express()

// parse application/json
// app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.post('/api/*', upload.single('nm_some_file'), (req, resp) => {
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