import React from "react";

export default function Header(props) {
//   console.warn("home", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/227/569/small_2x/add-to-cart-icon-design-illustration-vector.jpg" />
      </div>
    </div>
  );
}
