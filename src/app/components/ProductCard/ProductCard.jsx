"use client";

export const ProductCard = ({ product }) => {
  console.log(product); // Logs the product object to the console

  return (
    <div className="relative group  bg-white shadow-lg rounded-3xl p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
      <div className="felx justify-center items-center w-full object-none">
      <img
        src={`http://localhost:5000/${product.image}`} 
        alt={product.name}
        className="rounded-lg"
        width={200}
        height={300}
      />

      </div>
      {/* Product Details */}
      <div className="mt-4">
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-xl font-bold text-black">{product.price} UZS</p>
      </div>

      {/* Button on hover */}
      <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Подробнее</button>
      </div>

      {/* Arrow button */}
      <div className="absolute bottom-4 right-4">
        <button className="bg-red-500  text-white p-2 h-10 w-10   rounded-full">➔</button>
      </div>
    </div>
  );
};
