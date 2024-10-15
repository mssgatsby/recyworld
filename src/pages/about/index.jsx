import { useEffect, useState } from "react";
import "./product.css";
import { useParams } from "react-router-dom";

export default function About() {
  let { id } = useParams();

  let [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  return (
    <>
      <div>
        <h1>Product Details</h1>
        <p>
          <strong>Id:</strong> {product.id}
        </p>
        <p>
          <strong>Email:</strong> {product.email}
        </p>
        <p>
          <strong>Body:</strong> {product.body}
        </p>
      </div>
    </>
  );
}
