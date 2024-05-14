import Vishal from './Vishal.jsx'
function App() {
  const username = " Mr. Vishal-P"
  return (
    // <h1>Hii... I am Vishal Pal</h1>
    <>     
    {/* This is called fragment{<> </>} help in Adjacent JSX elements must be wrapped in an enclosing tag */}
    {/* Component shold name be capitalise for best pratices */}

    <Vishal/>
    <h2>Okay Nice to meet you {username}</h2>
    </>
  )
}

export default App
