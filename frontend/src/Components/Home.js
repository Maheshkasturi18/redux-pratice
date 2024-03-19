import React from "react";

export default function Home(props) {
  console.warn("props", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://i.gadgets360cdn.com/products/large/iphone-12-all-404x800-1602616616.jpg" />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>

        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "iphone 14" })
            }
          >
            Add To Cart
          </button>

          <button className="remove-btn" onClick={() => props.removeToCartHandler()}>
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
