import { IGetProducts, IProduct } from "@/types";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";

const BestSellers = ({ data }: { data: IGetProducts }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <TiStarFullOutline key={i} className="text-yellow-500 text-lg" />
        );
      } else if (i - rating > 0 && i - rating < 1) {
        stars.push(
          <TiStarHalfOutline key={i} className="text-yellow-500 text-lg" />
        );
      } else {
        stars.push(<TiStarOutline key={i} className="text-gray-400 text-lg" />);
      }
    }
    return stars;
  };

  const productItems = data?.products?.slice(10, 18).map((product: IProduct) => (
    <div
      key={product.id}
      className="relative group overflow-hidden transform transition-all duration-300"
    >
      <div className="relative w-full h-[250px] sm:h-[240px] md:h-[250px] lg:h-[260px] block overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 bg-[#F5F5F5]"
          src={`${product.thumbnail}`}
          alt={product.title}
        />

        <div className="absolute top-3 right-3 flex flex-col items-center gap-2">
          <button className="w-[34px] h-[34px] flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition">
            <FaRegHeart className="text-gray-600 text-lg" />
          </button>
          <button className="w-[34px] h-[34px] flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition">
            <IoEyeOutline className="text-gray-600 text-lg" />
          </button>
        </div>

        <button
          className="absolute bottom-0 left-0 w-full bg-primary text-[#fff] py-2 text-center text-sm font-semibold uppercase 
              transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          Add To Cart
        </button>
      </div>

      <div className="py-3 px-2 transition-colors duration-300">
        <h2
          title={product.title}
          className="text-base font-poppins-medium text-primary truncate max-[620px]:text-sm"
        >
          {product.title}
        </h2>
        <div className="flex mt-2 items-center gap-2 text-sm">
          <strong className="text-base text-[#DB4444] font-poppins max-[620px]:text-base">
            $ {product.price}
          </strong>
          <div className="flex items-center ">
            {renderStars(product.rating)}
          </div>
          <span className="text-gray-500 text-sm flex items-center">
            ({product.reviews.length})
          </span>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-4">Best Selling Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-4">
        {productItems}
      </div>
    </section>
  );
};

export default BestSellers;
