import { useState } from "react";

const Checkout = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    paymentMethod: "Cash on delivery",
    coupon: "",
    saveInfo: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePlaceOrder = () => {
    if (billingInfo.saveInfo) {
      localStorage.setItem("billingInfo", JSON.stringify(billingInfo));
    }
    console.log("Buyurtma ma'lumotlari:", billingInfo);
    alert("Buyurtmangiz muvaffaqiyatli qabul qilindi!");
  };

  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* 🔹 Billing Details */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={billingInfo.firstName}
            onChange={handleChange}
            placeholder="First Name*"
            className="border w-full p-3 rounded"
          />
          <input
            type="text"
            name="companyName"
            value={billingInfo.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="border w-full p-3 rounded"
          />
          <input
            type="text"
            name="streetAddress"
            value={billingInfo.streetAddress}
            onChange={handleChange}
            placeholder="Street Address*"
            className="border w-full p-3 rounded"
          />
          <input
            type="text"
            name="apartment"
            value={billingInfo.apartment}
            onChange={handleChange}
            placeholder="Apartment, floor, etc. (optional)"
            className="border w-full p-3 rounded"
          />
          <input
            type="text"
            name="city"
            value={billingInfo.city}
            onChange={handleChange}
            placeholder="Town/City*"
            className="border w-full p-3 rounded"
          />
          <input
            type="text"
            name="phone"
            value={billingInfo.phone}
            onChange={handleChange}
            placeholder="Phone Number*"
            className="border w-full p-3 rounded"
          />
          <input
            type="email"
            name="email"
            value={billingInfo.email}
            onChange={handleChange}
            placeholder="Email Address*"
            className="border w-full p-3 rounded"
          />
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              name="saveInfo"
              checked={billingInfo.saveInfo}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <span>Save this information for faster check-out next time</span>
          </label>
        </form>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6">Your Order</h2>
        <div className="border p-6 rounded-lg shadow-md">
          <div className="flex justify-between border-b pb-2 mb-2">
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <span>H1 Gamepad</span>
            <span>$1100</span>
          </div>

          <div className="flex justify-between border-t pt-2 font-semibold">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>$1750</span>
          </div>

          <div className="mt-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Bank"
                checked={billingInfo.paymentMethod === "Bank"}
                onChange={handleChange}
              />
              <span>Bank</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on delivery"
                checked={billingInfo.paymentMethod === "Cash on delivery"}
                onChange={handleChange}
              />
              <span>Cash on delivery</span>
            </label>
          </div>

          <div className="mt-4 flex">
            <input
              type="text"
              name="coupon"
              value={billingInfo.coupon}
              onChange={handleChange}
              placeholder="Coupon Code"
              className="border w-full p-2 rounded-l"
            />
            <button className="bg-secondary text-[#fff] px-4 py-2 rounded-r hover:bg-[#e44747]">
              Apply Coupon
            </button>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-4 bg-secondary text-[#fff] px-4 py-2 rounded hover:bg-[#e44747]"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
