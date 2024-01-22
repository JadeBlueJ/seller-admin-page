import React, { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ProductList from "./components/ProductList";
function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    let list = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      list.push(JSON.parse(value));
    }
    setProductList(list);
  }, []);
  const onSubmitProduct = (formObj) => {
    localStorage.setItem(`${formObj.id}`, JSON.stringify(formObj));

    setProductList((prevState) => {
      const updatedList = [...prevState];
      updatedList.unshift(formObj)
      return updatedList;
    });
  };
  return (
    <React.Fragment>
      <InputForm onSubmit={onSubmitProduct} />
      <ProductList products={productList}/>
    </React.Fragment>
  );
}

export default App;
