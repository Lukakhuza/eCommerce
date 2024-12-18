import { useLoaderData } from "react-router-dom";
import ProductsList from "./ProductsList";

function ProductsPage() {
  const products = useLoaderData();
  return <ProductsList products={products} />;
}

export default ProductsPage;

export async function loader() {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    //  ...
  } else {
    const resData = await response.json();
    return resData.products;
  }
}
