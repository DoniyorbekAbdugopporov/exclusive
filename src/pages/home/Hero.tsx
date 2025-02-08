import { FaApple } from "react-icons/fa";
import heroPhoto from "../../assets/images/hero_iphone.png";

const Hero = () => {
  return (
    <div className="h-[344px] container mx-auto flex items-center justify-between bg-primary pl-16">
    <div className="text-[#fff] space-y-3">
        <div className="flex items-center gap-4">
          <FaApple className="w-10 h-[49px] max-[450px]:w-8 max-[450px]:h-10" />
          <p className="font-poppins-medium text-2xl max-[450px]:text-xl">iPhone 14 Series</p>
        </div>
        <h1 className="text-5xl font-inter-medium max-[450px]:text-3xl">Up to 10% off Voucher</h1>
        <button className="flex items-center gap-2 text-white border-b border-white pb-1 max-[450px]:gap-1">
          Shop Now →
        </button>
      </div>

      {/* O'ng tomon - iPhone rasmi */}
      <div
        className="h-full w-full bg-contain bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${heroPhoto})` }}
      ></div>
    </div>
  );
};

export default Hero;