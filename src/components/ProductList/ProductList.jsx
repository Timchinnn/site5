import React, { useState } from "react";
import "./ProductList.css";
import Productitem from "../Productitem/Productitem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
  { id: 1, title: "Jeans", price: 500, description: "Blue" },
  { id: 2, title: "Jeans", price: 1200, description: "Black" },
  { id: 3, title: "Jeans", price: 22400, description: "White" },
  { id: 4, title: "Jeans", price: 54500, description: "Green" },
  { id: 5, title: "Jeans", price: 65500, description: "Gray" },
  { id: 6, title: "Jeans", price: 45500, description: "Top" },
  { id: 7, title: "Jeans", price: 52400, description: "Bot" },
  { id: 8, title: "Jeans", price: 77500, description: "Bluet" },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  });
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);

  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];
    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);
    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({ text: `Купить за ${getTotalPrice(newItems)}` });
    }
  };

  return (
    <div className={"list"}>
      {products.map((item) => (
        <Productitem
          product={item}
          onAddd={onAddd}
          className={"item"}
        ></Productitem>
      ))}
    </div>
  );
};

export default ProductList;
