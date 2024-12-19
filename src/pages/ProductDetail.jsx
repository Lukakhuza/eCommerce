import { useParams, useLoaderData } from "react-router-dom";

function ProductDetailPage() {
  const product = useLoaderData();
  return (
    <>
      <h1>Product Details!</h1>
      <p>Product ID: {product.id}</p>
      <p>{product.title}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
    </>
  );
}

export default ProductDetailPage;

export async function loader({ request, params }) {
  const id = params.productId;
  console.log(id);
  const response = await fetch("https://dummyjson.com/products/" + id);
  // console.log(response);
  if (!response.ok) {
    console.log("There was an error");
    // throw json(
    //   { message: "Could not fetch details for selected product." },
    //   { status: 500 }
    // );
  } else {
    // console.log("There was no error.");
    // console.log(response);
    return response;
  }
}
