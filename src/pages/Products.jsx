import { useState, useEffect } from "react";

function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        setError("Fetching Products Failed.");
      } else {
        const resData = await response.json();
        setFetchedProducts(resData.products);
      }
      setIsLoading(false);
    }

    fetchProducts();
    console.log(fetchedProducts);
  }, []);

  // console.log();

  return (
    <>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedProducts && <p>We have products</p>}
    </>
  );
}

export default ProductsPage;
