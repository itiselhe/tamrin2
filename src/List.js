import React from "react";

function List({ list, show, setList }) {
  function deleteItem(e) {
    const name = e.target.getAttribute("att");
    setList(list.filter((item) => item.title !== name));
  }

  if (list.length >= 1 && show === true) {
    const item = list.map(({ title, id }) => (
      <li key={id}>
        {title}
        <button att={title} onClick={deleteItem}>
          delete
        </button>
      </li>
    ));
    return <ol>{item}</ol>;
  }
}

export default List;
