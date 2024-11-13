import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="App">
    <div class="newsfeed">
      <div class="newsfeed-item">
        <h1>@mittensTheCat</h1>
        <span>followers: 342</span>
        <p>
          I'm feeling peckish, does anyone have any MeowMix for me?
        </p>
        <hr/>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
