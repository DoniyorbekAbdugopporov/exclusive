import { useRoutes } from "react-router-dom";
import { SuspenseContainer } from "../config";
import Account from "@/pages/account/Account";
import Login from "@/pages/auth/login/Login";
import ProductDetail from "@/pages/Detail/ProductDetail";
import Home from "@/pages/home/Home";
import Layout from "@/pages/layout/Layout";
import NotFound from "@/pages/not-found/NotFound";
import Wishlist from "@/pages/wishlist/Wishlist";

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: (
            <SuspenseContainer>
              <Layout />
            </SuspenseContainer>
          ),
          children: [
            {
              path: "/",
              element: (
                <SuspenseContainer>
                  <Home />
                </SuspenseContainer>
              ),
            },
            {
              path: "/wishlist",
              element: (
                <SuspenseContainer>
                  <Wishlist />
                </SuspenseContainer>
              ),
            },
            {
              path: "product/:id",
              element: (
                <SuspenseContainer>
                  <ProductDetail />
                </SuspenseContainer>
              ),
            },
            {
              path: "/account",
              element: (
                <SuspenseContainer>
                  <Account />
                </SuspenseContainer>
              ),
            },
            {
              path: "*",
              element: (
                <SuspenseContainer>
                  <NotFound />
                </SuspenseContainer>
              ),
            },
          ],
        },
        {
          path: "/login",
          element: (
            <SuspenseContainer>
              <Login />
            </SuspenseContainer>
          ),
        },
      ])}
    </>
  );
};

export default Routers;
