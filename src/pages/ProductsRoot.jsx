import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ProductsRootLayout() {
  return (
    <>
      {/* <MainNavigation /> */}
      <Outlet />
    </>
  );
}

export default ProductsRootLayout;
