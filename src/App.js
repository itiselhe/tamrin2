import {useState} from "react";
import List from "./List";

function App() {

  const [list , setList] = useState([ ]);
  const [inputValue , setInputValue] = useState(" ");
  const [showBtn , setBtn] = useState(false)

  function addValue(e) {
    setInputValue(e.target.value)
  }

  function add (e) {
    e.preventDefault()
    setList([...list , {title : inputValue , id: list.length} ])
    setInputValue(" ")
  }

  function showList(e){
    e.preventDefault();
    setBtn(!showBtn)
  }

  return (
    <>
      <h1>To Do List</h1>
      <input onChange={addValue} value={inputValue}></input>
      <button onClick={add}>add</button>
      <button onClick={showList}>{showBtn===false ? <i>show list</i> : <i>hide list</i>}</button>

      <List list = {list} show={showBtn} setList={setList}/>
    </>
  );
}

export default App;
