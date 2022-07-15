# Notes on ExpressJS

[GO CHECK OUT THE SOURCE CODE EXAMPLE](./express/examples/multipart_files/server.js)

## [BodyParser](http://expressjs.com/en/resources/middleware/body-parser.html)

_You need to use this npm module when your endpoints expect to receive certain content-types. Note that you still can't use this for `multipart/form-data`. For that, user `multer`_

```js
import bodyParser from 'body-parser'

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
```

## [Multer](http://expressjs.com/en/resources/middleware/multer.html)

_You need to use this npm module when your endpoints expect to receive `multipart/form-data`, or when you might be planning to upload a file_

_Multer adds a `body` object and a `file` or `files` object to the request object. The `body` object contains the values of the text fields of the form, the `file` or `files` object contains the files uploaded via the form._

_Don't forget the `enctype="multipart/form-data"` in your form._

```js
// The html file
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>

// NodeJS - server.js file
import multer from 'multer'
// Can omit the config object if you aren't uploading files
const upload = multer({ dest: 'uploads/' })
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
// If you don't expect any files to be uploaded, just text, use upload.none()
app.post('/api/*', upload.none(), (req, resp) => {
    req.body['my_form_field']
})
```