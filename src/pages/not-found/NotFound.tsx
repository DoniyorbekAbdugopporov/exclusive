// import React from "react";
// import { useNavigate } from "react-router-dom";

// const NotFound = () => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-white"
//     >
//       <div className="max-w-md mx-auto text-center p-8 rounded-lg shadow-lg bg-white text-gray-800">
//         <div className="text-9xl font-bold mb-4 text-bg-primary">404</div>
//         <h1 className="text-4xl font-bold mb-6">Oops! Page Not Found</h1>
//         <p className="text-lg mb-8">
//           The page you're looking for seems to have gone on a little adventure.
//           Don't worry, we'll help you find your way back home.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="inline-block font-semibold px-6 py-3 rounded-md transition-colors duration-300 bg-bg-primary border-2 border-primary text-primary hover:bg-yellow-700"
//         >
//           Go Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default React.memo(NotFound);

import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-white px-4 max-sm:px-2">
      <div className="max-w-md mx-auto text-center p-8 rounded-lg shadow-lg bg-white text-gray-800 max-sm:p-4">
        <div className="text-9xl font-bold mb-4 text-bg-primary max-sm:text-6xl">
          404
        </div>
        <h1 className="text-4xl font-bold mb-6 max-sm:text-2xl">
          Oops! Page Not Found
        </h1>
        <p className="text-lg mb-8 max-sm:text-sm">
          The page you're looking for seems to have gone on a little adventure.
          Don't worry, we'll help you find your way back home.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-block font-semibold px-6 py-3 rounded-md transition-colors duration-300 bg-bg-primary border-2 border-primary text-primary hover:bg-yellow-700 max-sm:px-4 max-sm:py-2 max-sm:text-sm"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
