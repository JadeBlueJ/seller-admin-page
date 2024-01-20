import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import ListItem from "./ListItem";
const ProductList = (props) => {
//   const [electronics, setElectronics] = useState([]);
//   const [food, setFood] = useState([]);
//   const [skincare, setSkincare] = useState([]);
  return (
    <Card>
      <h3>Product List </h3>
      <h5>Electronics</h5>
      <ListItem items={props.electronics}></ListItem>
      <h5>Food</h5>
      <ListItem items={props.food}></ListItem>
      <h5>Skincare</h5>
      <ListItem items={props.skincare}></ListItem>
    </Card>
  );
};

export default ProductList;
