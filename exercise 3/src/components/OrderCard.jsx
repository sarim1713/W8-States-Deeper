import React from "react";

export default function OrderCard({
  product,
  productPrice,
  quantity,
  onQuantityChanged,
}) {
  const format = (price) => "$ " + price;

  const removeQuantity = () => {
    if (canRemoveQuantity()) {
      onQuantityChanged(product, quantity - 1);
    }
  };
  const addQuantity = () => {
    onQuantityChanged(product, quantity + 1);
  };

  const removeQuantityButtonStyle = () => {
    return canRemoveQuantity() ? undefined : { backgroundColor: "#bfbfbf" };
  };

  const canRemoveQuantity = () => {
    return quantity > 0;
  };

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{format(productPrice)}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          style={removeQuantityButtonStyle()}
          onClick={removeQuantity}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={addQuantity}>
          +
        </div>
      </div>
    </div>
  );
}
