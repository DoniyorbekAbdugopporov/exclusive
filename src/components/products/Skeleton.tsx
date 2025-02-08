import React, { FC } from "react";

const Skeleton: FC<{ count?: number }> = ({ count = 8 }) => {

  return (
    <div className="container my-10 px-4 max-[620px]:my-5 max-[620px]:px-2">
      <div className="h-[344px] bg-gray-300 mb-2"></div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-4">
        {Array(count)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-lg shadow bg-gray-100"
            >
              {/* Loading Image */}
              <div className="relative w-full h-[250px] sm:h-[240px] md:h-[250px] lg:h-[260px] bg-gray-300 animate-pulse"></div>

              {/* Loading Text */}
              <div className="p-3">
                <div className="w-10/12 h-6 bg-gray-300 animate-pulse rounded"></div>
                <div className="w-8/12 mt-2 h-6 bg-gray-300 animate-pulse rounded"></div>

                {/* Price va rating */}
                <div className="w-6/12 mt-2 h-6 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Skeleton);
