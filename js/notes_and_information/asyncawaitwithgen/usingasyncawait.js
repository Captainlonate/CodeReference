const fetch = require('node-fetch')
const POSTS_URL = 'https://jsonplaceholder.typicode.com/todos/1'

/*
  In what order will the following console.logs() print?
*/

async function getPostDoSomething(url) {
  console.log('First')
  const response = await fetch(url)
  console.log('Third')
  const data = await response.json()
  console.log(`(Fourth) Post title "${data.title}"`)
}

getPostDoSomething(POSTS_URL)

console.log('Second')