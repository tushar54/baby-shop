import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../AllComponent/NavbarForCard";
import useCard from "../Hooks/useCard";
import axios from "axios";

const CardDetails = () => {
    const data = useLoaderData();
    const { refetch } = useCard()
    const navigate = useNavigate()

    const addToCart = async (crib) => {
        const newItem = {
          productId: crib._id,
          name: crib.name,
          price: crib.price,
          img: crib.img,
          quantity: 1, // Default quantity
        };
    
        try {
          const response = await axios.post("https://server-side-tau-lovat.vercel.app/cart", newItem);
          if (response.status === 200) {
            alert("Item added to cart!");
            refetch()
          }
        } catch (error) {
          if (error.response.status === 401) { navigate('/cart') }
          // navigate('/cart')
        }
      };

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Image Section */}
                        <div className="md:w-1/2">
                            <img
                                src={data.img}
                                alt={data.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="md:w-1/2 p-6 flex flex-col">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                {data.name}
                            </h1>
                            <p className="text-sm text-gray-500 mb-4 uppercase">
                                {data.category}
                            </p>
                            <div className="flex items-center mb-4">
                                <span className="text-2xl font-semibold text-[#E38443]">
                                    ${data?.price?.toFixed(2)}
                                </span>
                                <span className="ml-4 text-sm text-gray-600">
                                    Color: {data.color}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-4">
                                {data.description}
                            </p>
                            <p className="text-gray-600 mb-6">
                                {data.additionalDescription}
                            </p>
                            <button onClick={()=>addToCart(data)} className="w-full bg-[#E38443] hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
