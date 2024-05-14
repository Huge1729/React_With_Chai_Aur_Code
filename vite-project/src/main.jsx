import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Make and call from here istead of seperate main.jsx
function MyApp(){
  return (
      <div>
          <h3>How are you?</h3>
      </div>
  )
}

const anotherUser = "chai aur react"
// ---------This is the way of making custom reactElement
// Behind the sence all is done by babel
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser
)




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    /* <App />
    <MyApp/> */
    reactElement
  // </React.StrictMode>,
)
