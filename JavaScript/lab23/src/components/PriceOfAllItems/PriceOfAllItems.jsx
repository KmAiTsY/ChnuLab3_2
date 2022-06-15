import React from "react";

const PriceOfAllItems = ({ arrayList }) => {
  let allPrice = arrayList.reduce(
    (total, current) => total + current.price * current.count,
    0
  );

  return <div>Ціна за всі товари: {allPrice}</div>;
};

export default PriceOfAllItems;
