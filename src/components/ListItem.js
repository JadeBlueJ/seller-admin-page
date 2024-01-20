import React from 'react';
import Button from './Button/Button';
const ListItem = props => {
  return (
    <ul>
      {props.items.map(item => (
        <li
          key={item.id}
          id={item.id}
        //   onDelete={props.onDeleteItem}
        >
          {item.name}
          <button> Delete Product</button>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
