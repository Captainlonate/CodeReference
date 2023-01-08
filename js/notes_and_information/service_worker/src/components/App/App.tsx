import { useEffect } from "react"

const App = () => {

  useEffect(() => {
    console.log('UseEffect()')
    async function getData () {
      try {
        const data = await fetch('http://localhost:8000/api/json/wow')
        const parsed = await data.json()
        console.log('Parsed Wow Data', parsed)
      } catch (ex) {
        console.log('Problem when fetching api data.', ex)
      }
    }
    getData()
  }, [])

  return (
    <div>App</div>
  )
}

export default App