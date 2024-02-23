# Syntax for using fetch (both browser and nodejs npm libraries)

## Browser Fetch

[MDN for Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

__fetch()__

Results in a `Response` object (a wrapper around the data).

__fetchResponse.json()__

Returns a promise which resolves to the parsed JSON object/array.

__fetchResponse.text()__

Returns a promise which resolves to the text, if the contents are in raw text format. Strangely, it seems that if you request JSON and use `.text()` you'll still get a string representation of the data. So, at least it doesn't error out.

__fetchResponse.blob()__

[Example Using blob](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful)

__fetchResponse.formData()__

_??_

__fetchResponse.arrayBuffer()__

_??_

__fetchResponse.status__

It's an integer, such as 200, 404, 300, 500. Keep in mind that the promise will not reject even on 500's like you probably expect. So, the `.then()` of the promise still runs.

If the requested URL is redirected to the new one with the response 300-309, the `status` is set to 200. In addition the `redirected` property is set to true.

__fetchResponse.statusText__

This will be a string, like "OK" or "Not Found".

__When will the promise reject__

The fetch() returns a promise that rejects when a real failure occurs such as a web browser timeout, a loss of network connection, and a CORS violation. The Promise returned from fetch() won't reject on HTTP error status even if the response is an HTTP 404 or 500.

This will reject from misconfigured CORS.

If the response `status` is not in the range 200-299, then the `ok` will be set to false.

__credentials: 'include'__

If you DON'T set `credentials: 'include'`, then:

- won't send cookies in cross-origin requests
- won't set any cookies sent back in cross-origin responses
- As of August 2018, the default credentials policy changed to same-origin. Firefox was also modified in version 61.0b13)


__Example: GET__

```js
const url = `${process.env.REACT_APP_BASE_URL}/chats/room/${roomId}`
const response = await window.fetch(url, {
    method: 'GET',
    credentials: 'include'
})

if (response.ok) {
    // These fields are actually set by the server, in a 200
    const { success, error, data } = await response.json()
    if (success) {
        return data
    }
    console.log('Server responded with success false.', error)
} else {
    console.error('Response was not ok. Something is wrong.')
}
```

__Example: POST__

```js
const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
})
```

__Example: File Upload__

[From MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file)

[Multi File Example From MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_multiple_files)

_By setting body directly to formData, this will also automatically set the content type to `multipart/form-data`, but it also adds some weird boundary part at the end?_

`multipart/form-data; boundary=---------------------------164618148613456497304172537218`

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
```

__Example: Parse Yaml__

```js
(async function parseYaml () {
    // Fetch yaml data (list of github's supported languages)
    // Link came from here:
    // https://docs.github.com/en/get-started/learning-about-github/github-language-support#about-supported-languages
    const result = await fetch('https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml')

    // Convert it to plain text
    const parsed = await result.text()

    // Pre-compile the regex ([\w] would have targeted '_')
    // Evidently some do start with numbers
    const regex_isLetter = RegExp(/[a-zA-Z0-9]/)

    // Split on new lines
    // Filter out any line that doesn't have an actual
    //   alphanumeric character in the first position.
    // Yaml uses spaces/indententation, but the language names are not indented.
    // 
    // Example:
    // # Comment don't care
    // --- Don't care
    // C++:
    //   crap we
    //   don't care about
    // Java:
    const languages = parsed
        .split('\n')
        .filter((line) => !!line && regex_isLetter.test(line[0]))
        .map((language) => language.replace(':', '').trim())

    console.log(languages)
})()
```