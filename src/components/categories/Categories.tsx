import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Kategoriya rasmlari
import CategoryPhone from "@/assets/images/Category-CellPhone.png";
import CategoryComputer from "@/assets/images/Category-Computer.png";
import CategorySmartWatch from "@/assets/images/Category-SmartWatch.png";
import CategoryCamera from "@/assets/images/Category-Camera.png";
import CategoryHeadPhones from "@/assets/images/Category-Headphone.png";
import CategoryGaming from "@/assets/images/Category-Gamepad.png";

const Categories = () => {
  const categories = [
    { name: "Phones", image: CategoryPhone },
    { name: "Computers", image: CategoryComputer },
    { name: "SmartWatch", image: CategorySmartWatch },
    { name: "Camera", image: CategoryCamera },
    { name: "HeadPhones", image: CategoryHeadPhones },
    { name: "Gaming", image: CategoryGaming },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Camera");

  return (
    <section className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Browse By Category</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition hover:bg-secondary hover:text-[#fff] ${
              selectedCategory === category.name
                ? "bg-red-500 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-10 h-10 mb-2"
            />
            <span className="font-medium">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(Categories);
