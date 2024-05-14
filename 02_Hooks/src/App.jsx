import { useState } from 'react'


function App() {
  // let counter = 0
  let [counter , setCounter] = useState(12)
// Any attribute/parameter  can be introduec here
  const addValue = ()=>{
    // console.log("value added", Math.random());
    if(counter < 20){
      counter += 1;
      setCounter(counter)
      console.log("value added",counter);
    }
    else{
      console.log("Value reached to maximum " , counter);
    }     
  }

  const removeValue = ()=>{
    
    if(counter > 0){
      counter -= 1;
      setCounter(counter)
      console.log("value removed",counter);
    }
    else{
      console.log("Value reached to minimum " , counter);
    }   
  }


  return (
    <>
      <h1>It's my value {counter}</h1>

      <button onClick={addValue}> Add Value {counter} </button>
      <br />
      <button onClick={removeValue}
      >Remove Value {counter}</button>
      <p>after that {counter}</p>
    </>
  )
}

export default App


// hooks used for provide the sync between state and UI 
// Now by the help of hooks we can propogate the changes in entire js with much take care of each state..
// Here react provide confortbility to user for UI cases all the UI updation are handled by react
// Behind the sence it is managed by babel {as here we didnt import react  but is works}