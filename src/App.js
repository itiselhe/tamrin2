import {useState} from "react";

function App() {

  const [list , setList] = useState([ ]);
  const [inputValue , setInputValue] = useState(" ")

  function addValue(e) {
    setInputValue(e.target.value)
  }

  function add (e) {
    e.preventDefault()
    setList([...list , {title : inputValue , id: list.length} ])
    setInputValue(" ")
  }

  return (
    <>
      <h1>To Do List</h1>
      <input onChange={addValue} value={inputValue}></input>
      <button onClick={add}>add</button>
      <button>show List</button>
    </>
  );
}

export default App;
