import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sign_photo from "../../../assets/images/sign_photo.png";

const SignUp = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ **Ro‘yxatdan o‘tish funksiyasi**
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    // LocalStorage orqali foydalanuvchi mavjudligini tekshirish
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      setError("Bu foydalanuvchi allaqachon ro‘yxatdan o‘tgan!");
      return;
    }

    // Foydalanuvchini `localStorage`ga saqlash
    localStorage.setItem("user", JSON.stringify({ email, password }));

    // `/account` sahifasiga yo‘naltirish
    navigate("/account");
  };

  return (
    <div className="container flex flex-col gap-10 md:flex-row mt-10 mb-20">
      <div className="hidden md:block">
        <img src={sign_photo} alt="Sign Up" />
      </div>
      <div className="flex justify-center md:pl-32">
        <div className="w-[370px] flex flex-col justify-center items-center font-poppins">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-inter font-medium leading-[30px]">
                Sign up to Exclusive
              </h2>
              <p className="font-poppins font-normal">
                Enter your details below
              </p>
            </div>

            <div className="flex flex-col py-14 gap-10">
              <input
                className="outline-none border-b-2 pb-2 w-full"
                placeholder="Email or Phone Number"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="outline-none border-b-2 pb-2 w-full"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="flex justify-between items-center">
              <button
                className="bg-[#DB4444] border border-[#DB4444] text-[#FAFAFA] rounded-[4px] py-3 px-8 hover:bg-white hover:text-[#DB4444] duration-150"
                type="submit"
              >
                Sign Up
              </button>
              <p
                onClick={() => navigate("/signin")}
                className="text-[#DB4444] cursor-pointer underline hover:text-red-800 duration-150"
              >
                Log In here
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
