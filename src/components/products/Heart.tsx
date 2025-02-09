import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { toggleLike } from "../../redux/features/wishlist-slice";
import { IProduct } from "../../types";

const Heart = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.value);

  const isLiked = wishlist.some((item: any) => item.id === product.id);

  return (
    <button
      onClick={() => dispatch(toggleLike(product))}
      className="w-[40px] h-[40px] rounded-full bg-white shadow-md flex items-center justify-center text-[22px] transition-all duration-300 hover:bg-gray-200"
    >
      {isLiked ? <IoMdHeart className="text-red-500" /> : <IoMdHeartEmpty />}
    </button>
  );
};

export default Heart;
