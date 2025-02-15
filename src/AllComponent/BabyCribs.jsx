import { useEffect, useState } from "react";
import axios from "axios";
import useCard from "../Hooks/useCard";

const BabyCribs = () => {
  const [data, setData] = useState([]);
  const {refetch}=useCard()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/Cribs");
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Add to Cart function (POST to MongoDB)
  const addToCart = async (crib) => {
    const newItem = {
      productId: crib._id,
      name: crib.name,
      price: crib.price,
      img: crib.img,
      quantity: 1, // Default quantity
    };

    try {
      const response = await axios.post("http://localhost:5000/cart", newItem);
      if (response.status === 200) {
        alert("Item added to cart!");
        refetch()
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((crib) => (
          <div
            key={crib._id}
            className="group border-slate-300 border rounded-lg p-4 flex flex-col items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={crib.img}
              alt={crib.name}
              className="w-full h-auto object-cover mb-3"
            />

            {/* Category */}
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              {crib.category}
            </p>

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">{crib.name}</h2>

            {/* Price */}
            <p className="block group-hover:hidden  text-gray-600 mt-1">${crib.price}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(crib)}
              className="hidden group-hover:block  text-[#DB915E] font-medium rounded transition duration-300 "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyCribs;
