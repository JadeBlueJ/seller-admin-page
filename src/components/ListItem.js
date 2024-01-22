import React from 'react';
import Button from './Button/Button';
const ListItem = props => {
  const deleteHandler=(event)=>{
    props.onDelete(event.target.value)
  }
  return (
    <ul>
      {props.items.map(item => (
        <li
          key={item.id}
          id={item.id}
        //   onDelete={props.onDeleteItem}
        >
          {item.name}
          <button value={item.id} onClick={deleteHandler} > Delete Product</button>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
