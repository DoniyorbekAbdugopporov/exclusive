import { useRoutes, Navigate } from "react-router-dom";
import { SuspenseContainer } from "../config";
import Account from "@/pages/account/Account";
import SignUp from "@/pages/auth/signUp/SignUp";
import SignIn from "@/pages/auth/signIn/SignIn";
import ProductDetail from "@/pages/detail/Detail";
import Home from "@/pages/home/Home";
import Layout from "@/pages/layout/Layout";
import Wishlist from "@/pages/wishlist/Wishlist";
import Cart from "@/pages/cart/Cart";
import Checkout from "@/pages/checkout/CheckOut";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import NotFound from "@/pages/not-found/NotFound";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return user ? element : <Navigate to="/signin" />;
};

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
              path: "/contact",
              element: (
                <SuspenseContainer>
                  <Contact />
                </SuspenseContainer>
              ),
            },
            {
              path: "/about",
              element: (
                <SuspenseContainer>
                  <About />
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
              path: "/cart",
              element: (
                <SuspenseContainer>
                  <Cart />
                </SuspenseContainer>
              ),
            },
            {
              path: "/checkout",
              element: (
                <SuspenseContainer>
                  <Checkout />
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
              path: "/signup",
              element: (
                <SuspenseContainer>
                  <SignUp />
                </SuspenseContainer>
              ),
            },
            {
              path: "/signin",
              element: (
                <SuspenseContainer>
                  <SignIn />
                </SuspenseContainer>
              ),
            },
            {
              path: "/account",
              element: (
                <SuspenseContainer>
                  <PrivateRoute element={<Account />} />
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
      ])}
    </>
  );
};

export default Routers;
