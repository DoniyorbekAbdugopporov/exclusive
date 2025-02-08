import FlashSales from "@/components/flash_sales/FlashSales";
import Products from "../../components/products/Products";
import Skeleton from "../../components/products/Skeleton";
import { useGetProductsQuery } from "../../redux/api/product-api";
import Hero from "./Hero"
import Categories from "@/components/categories/Categories";
import BestSellers from "@/components/best_sellers/BestSellers";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery({});
  
  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Hero />
          <FlashSales />
          {data && (
            <Products
              data={data}
            />
          )}
          <Categories />
          <BestSellers data={data} />
        </>
      )}
    </>
  );
}

export default Home