import React from "react";

function List ({list , show}) {

          if(list.length >= 1 && show===true){
                    const item = list.map(({title , id}) => <li>{id+1} : {title}</li>);
                    return(
                              <ul>
                                        {item}
                              </ul>
                    )
          }
}

export default List;