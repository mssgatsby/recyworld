import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/product"}>
          <p>Products</p>
        </Link>
      </nav>
    </>
  );
}
