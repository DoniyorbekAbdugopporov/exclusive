import FlashSales from "@/components/flash_sales/FlashSales";
import Products from "../../components/products/Products";
import Skeleton from "../../components/products/Skeleton";
import { useGetProductsQuery } from "../../redux/api/products";
import Hero from "./Hero"
import Categories from "@/components/categories/Categories";
import MusicExperience from "@/components/music_experiance/MusicExperience";

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
          {data && <Products data={data} title={data.title} />}
          <Categories />
          <MusicExperience />
          {data && <Products data={data} title={data.title} />}
        </>
      )}
    </>
  );
}

export default Home