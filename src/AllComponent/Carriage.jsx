import { useEffect, useState } from "react";
import axios from "axios";
import useCard from "../Hooks/useCard";
import { Link, useNavigate } from "react-router-dom";

const Carriage = () => {
  const [data, setData] = useState([]);
  const { refetch } = useCard();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://server-side-tau-lovat.vercel.app/Carriage");
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Add to Cart function (POST to MongoDB)
  const addToCart = async (item) => {
    const newItem = {
      productId: item._id,
      name: item.name,
      price: item.price,
      img: item.img,
      quantity: 1, // Default quantity
    };

    try {
      const response = await axios.post("https://server-side-tau-lovat.vercel.app/cart", newItem);
      if (response.status === 200) {
        alert("Item added to cart!");
        refetch();
      }
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/cart");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="group border-slate-300 border rounded-lg p-4 flex flex-col items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Link  to={`/Details/${item._id}`}>
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-auto object-cover mb-3"
              />
              </Link>

            {/* Category */}
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
              {item.category}
            </p>

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>

            {/* Price */}
            <p className="block group-hover:hidden text-gray-600 mt-1">${item.price}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(item)}
              className="hidden group-hover:block text-[#DB915E] font-medium rounded transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carriage;
