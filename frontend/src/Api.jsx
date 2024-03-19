import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";

export default function Api() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <div className="products">
        {data &&
          data.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt="" className="img" />
              <h1>{product.name}</h1>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
      </div>
    </>
  );
}
