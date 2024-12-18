import { useParams, useLoaderData } from "react-router-dom";

function ProductDetailPage({ id, products }) {
  const data = useLoaderData();
  // const params = useParams();
  // console.log(data.product);
  // console.log({ id });
  // params.productId;
  return (
    <>
      <h1>Product Details!</h1>
      {/* <p>Product ID: {params.productId}</p> */}
      <p>{data}</p>
      {/* <div>
        {products.length === 0 && <p>Product Details Loading</p>}
        {products.length > 0 && (
          <section>
            {products
              .filter((product) => {
                return product.id === params.productId;
              })
              .map((product) => (
                <div>
                  <p>{product.id}</p>
                  <p>{product.title}</p>
                  <p>{product.category}</p>
                  <p>{product.description}</p>
                </div>
              ))}
          </section>
        )}
      </div> */}
    </>
  );
}

export default ProductDetailPage;

export async function loader({ request, params }) {
  const id = params.productId;
  const response = await fetch("http://localhost:5173/products/" + id);

  if (!response.ok) {
    // throw json(
    //   { message: "Could not fetch details for selected product." },
    //   { status: 500 }
    // );
  } else {
    return response;
  }
}
