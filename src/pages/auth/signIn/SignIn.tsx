import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sign_photo from "../../../assets/images/sign_photo.png";

const SignIn = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ **Tizimga kirish funksiyasi**
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    // `localStorage`dan foydalanuvchini olish
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("Bunday foydalanuvchi mavjud emas!");
      return;
    }

    // JSON ma'lumotlarni qayta tiklash
    const userData = JSON.parse(storedUser);

    // Email va parolni tekshirish
    if (userData.email === email && userData.password === password) {
      // Tizimga kirish muvaffaqiyatli bo'lsa, `/account` sahifasiga yo'naltirish
      navigate("/account");
    } else {
      setError("Email yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="container flex flex-col gap-10 md:flex-row mt-10 mb-20">
      <div className="hidden md:block">
        <img src={sign_photo} alt="Sign In" className="w-full" />
      </div>
      <div className="flex justify-center md:pl-32">
        <div className="w-[370px] flex flex-col justify-center items-center font-poppins">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-inter font-medium leading-[30px]">
                Log in to Exclusive
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
                Log In
              </button>
              <p className="text-[#DB4444] cursor-pointer hover:text-red-800 duration-150">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
  