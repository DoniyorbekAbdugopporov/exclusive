import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux";
import { FaTrash } from "react-icons/fa";
import {
  incrementAmountCart,
  decrementAmountCart,
  deleteCart,
} from "../../redux/features/cart-slice";
import EmptyCart from "./EmptyCart";
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(incrementAmountCart(id));
    } else {
      dispatch(decrementAmountCart(id));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(deleteCart(id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-gray-500 mb-6">
        <NavLink to="/">Home</NavLink>
        <span className="mx-2">/</span>
        <NavLink to="/contact">Cart</NavLink>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg"
                  />
                  <span>{item.title}</span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 ml-auto"
                  >
                    <FaTrash />
                  </button>
                </td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">
                  <select
                    className="border border-gray-300 rounded px-2 py-1"
                    value={item.amount}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-4">${item.price * item.amount}</td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => navigate("/")}
          className="border border-gray-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Return To Shop
        </button>
        <button className="border border-gray-500 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          Update Cart
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex gap-2 h-12">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-300 px-4 py-2 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="bg-secondary text-[#fff] px-8 rounded-md hover:bg-red-600 transition">
            Apply Coupon
          </button>
        </div>

        <div className="border border-gray-300 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-secondary text-[#fff] px-6 py-2 rounded-md hover:bg-red-600 transition w-full mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
