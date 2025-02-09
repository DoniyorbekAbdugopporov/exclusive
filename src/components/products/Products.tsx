import { IProduct } from "../../types";
import Stars from "../stars/Stars";
import CartBtn from "./CartBtn";
import Heart from "./Heart";
import SeeBtn from "./SeeBtn";

const Products = ({
  data,
  title,
}: {
  data: { products: IProduct[] };
  title: string;
}) => {
  return (
    <div className="container my-10 px-4">
      {/* Title */}
      <h2 className="font-poppins-bold text-2xl mb-6 text-center text-gray-900 max-[620px]:text-xl">
        {title}
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data?.products?.slice(0, 8).map((product) => (
          <div key={product.id} className="w-full max-w-[290px] relative group">
            {/* Chegirma belgisi */}
            {product.price > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{Math.round(product.price)}%
              </div>
            )}

            {/* Image Container */}
            <div className="h-[250px] bg-[#F5F5F5] flex justify-center items-center relative overflow-hidden rounded-sm">
              <img
                src={product.images[1] || product.images[0]}
                alt={product.title}
                className="object-contain w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
              />

              {/* Like & See Buttons */}
              <div className="absolute top-2 right-[-50px] group-hover:right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col gap-2">
                <Heart product={product} />
                <SeeBtn product={product} />
              </div>

              {/* Cart Button */}
              <CartBtn product={product} />
            </div>

            {/* Product Info */}
            <div className="flex flex-col pt-4">
              <h2 className="truncate font-poppins font-medium">
                {product.title}
              </h2>
              <div className="flex items-center gap-2 font-poppins">
                <p className="text-[#DB4444] font-semibold">
                  $
                  {Math.round(
                    product.price - (product.price * product.price) / 100
                  )}
                </p>
                {product.price > 0 && (
                  <p className="text-gray-500 line-through text-sm">
                    ${product.price}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Stars rating={product.rating} />
                <p className="text-gray-600 text-sm">({product.stock})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
