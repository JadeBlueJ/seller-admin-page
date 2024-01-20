import React, { useState } from "react";
import Card from "./Card/Card";
import Input from "./Input/Input";
import Button from "./Button/Button";

const InputForm = (props) => {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const changeProductId = (event) => {
    setProductId(event.target.value);
  };
  const changeSellingPrice = (event) => {
    setSellingPrice(event.target.value);
  };
  const changeProductName = (event) => {
    setProductName(event.target.value);
  };
  const changeProductCategory = (event) => {
    setProductCategory(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      productId.length === 0 ||
      sellingPrice.length === 0 ||
      productName.length === 0 ||
      productCategory.length === 0
    ) {
      alert("please enter valid details");
      return;
    } else {
      const formObj = {
        id: productId,
        name: productName,
        sellingPrice: sellingPrice,
        category: productCategory,
      };
      props.onSubmit(formObj)
      setProductId("");
      setSellingPrice("");
      setProductName("");
      setProductCategory("");
    }
  };
  return (
    <Card>
      <h3>Add Product Details</h3>
      <form onSubmit={submitHandler}>
        <Input
          id="pid"
          type="number"
          label="Product Id"
          value={productId}
          onChange={changeProductId}
        ></Input>
        <Input
          id="sp"
          type="number"
          label="Selling Price"
          value={sellingPrice}
          onChange={changeSellingPrice}
        ></Input>
        <Input
          id="pname"
          type="text"
          label="Product Name"
          value={productName}
          onChange={changeProductName}
        ></Input>
        <label htmlFor="category" style={{ margin: "10px", padding: "10px" }}>
          Category
        </label>
        <select
          id="category"
          value={productCategory}
          onChange={changeProductCategory}
          style={{ margin: "10px", padding: "10px" }}
        >
          <option value="" defaultValue>
            Enter an option
          </option>
          <option value="1">Electronics</option>
          <option value="2">Food</option>
          <option value="3">Skincare</option>
        </select>
        <div>
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </Card>
  );
};

export default InputForm;
