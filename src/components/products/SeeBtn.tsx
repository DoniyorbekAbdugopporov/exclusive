import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";

const SeeBtn = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/product/${product.id}`)}
      className="w-[40px] h-[40px] rounded-full bg-white shadow-md flex items-center justify-center text-xl transition-all duration-300 hover:bg-gray-200"
    >
      <AiOutlineEye />
    </button>
  );
};

export default SeeBtn;
