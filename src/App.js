import React, { useState, useEffect } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import ProductList from "./components/ProductList";
function App() {
  const [electronics, setElectronics] = useState([]);
  const [food, setFood] = useState([]);
  const [skincare, setSkincare] = useState([]);

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`key: ${key} value:${value}`)
      const parsed = JSON.parse(value);
      if (parsed.category === "1")
        setElectronics((prevState) => [parsed, ...prevState]);
      if (parsed.category === "2")
        setFood((prevState) => [parsed, ...prevState]);
      if (parsed.category === "3")
        setSkincare((prevState) => [parsed, ...prevState]);
    }
  }, []);

  const onSubmitProduct = (formObj) => {
    localStorage.setItem(`${formObj.id}`, JSON.stringify(formObj));
    if (formObj.category === "1") {
      setElectronics((prevState) => {
        const updatedList = [formObj, ...prevState];
        return updatedList;
      });
    } else if (formObj.category === "2") {
      setFood((prevState) => {
        const updatedList = [formObj, ...prevState];
        return updatedList;
      });
    } else {
      setSkincare((prevState) => {
        const updatedList = [formObj, ...prevState];
        return updatedList;
      });
    }
  };
  return (
    <React.Fragment>
      <InputForm onSubmit={onSubmitProduct} />
      <ProductList electronics={electronics} food={food} skincare={skincare} />
    </React.Fragment>
  );
}

export default App;
