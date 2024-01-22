import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import ListItem from "./ListItem";
const ProductList = (props) => {
  const [electronics, setElectronics] = useState([]);
  const [food, setFood] = useState([]);
  const [skincare, setSkincare] = useState([]);
  useEffect(() => {
    // Group products by category
    const groupedProducts = props.products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [product];
      } else {
        acc[product.category].push(product);
      }
      return acc;
    }, {});
  
    // Update state for each category separately
    setElectronics(groupedProducts["1"] || []);
    setFood(groupedProducts["2"] || []);
    setSkincare(groupedProducts["3"] || []);
  }, [props.products]);
  const deleteHandler=(deleteId)=>{
    console.log(`delete called : ${typeof(deleteId)}`)

    props.products.filter(product=>{
      console.log(typeof(product.id))
      return product.id!=deleteId.toString()
    })
    console.log(`${JSON.stringify(props.products)} after delete`)
    localStorage.removeItem(`${deleteId}`)

  }
  return (
    <Card>
      <h3>Product List </h3>
      <h5>Electronics</h5>
      <ListItem items={electronics} onDelete={deleteHandler}></ListItem>
      <h5>Food</h5>
      <ListItem items={food} onDelete={deleteHandler}></ListItem>
      <h5>Skincare</h5>
      <ListItem items={skincare} onDelete={deleteHandler}></ListItem>
    </Card>
  );
};

export default ProductList;
