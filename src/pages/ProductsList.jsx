import classes from "../pages/ProductsList.module.css";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  return (
    <div>
      <h1>All Products</h1>
      <ul className={classes.list}>
        {products.length === 0 && <p>Error</p>}
        {products.length > 0 &&
          products.map((product) => (
            <li key={product.id} style={{ listStyleType: "none" }}>
              <Link to={`${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={classes.image}
                />
                <div>{product.price}</div>
                <div>{product.title}</div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
