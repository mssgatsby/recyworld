import { useEffect, useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";

export default function Product() {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  console.log(product);
  return (
    <>
      <div>
        {product.map((data) => (
          <div className="data">
            {data.name} <Link to={`/product/${data.id}`}>view</Link>
          </div>
        ))}
      </div>
    </>
  );
}
