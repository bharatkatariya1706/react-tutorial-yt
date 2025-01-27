import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Sayname(){
  return (
    <div>
      <h2>helllllooooo bbbhhhhaaarrraaatttttttt</h2>
    </div>
  )
}


// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit GOOGLE</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to Visit GOOGLE'
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
