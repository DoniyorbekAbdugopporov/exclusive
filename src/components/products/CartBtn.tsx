import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { addCart } from "../../redux/features/cart-slice";
import { IProduct } from "../../types";

const CartBtn = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <button
      className={`absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 px-4 py-2 rounded-md ${
        isInCart
          ? "bg-gray-800 text-white cursor-not-allowed"
          : "bg-black hover:bg-gray-900 text-white"
      }`}
      onClick={() => {
        if (!isInCart) dispatch(addCart(product));
      }}
      disabled={isInCart}
    >
      <FaShoppingCart />
      {isInCart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default CartBtn;
