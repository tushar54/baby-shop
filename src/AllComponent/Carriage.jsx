import { useEffect, useState } from 'react';
import axios from "axios";

const Carriage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/Carriage')
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    console.log(data)

    return (
        <div className="container mx-auto px-4 py-6">
          {/* 
            Grid columns:
              - grid-cols-1 on default (mobile)
              - sm:grid-cols-2 at >=640px
              - md:grid-cols-3 at >=768px
              - lg:grid-cols-4 at >=1024px 
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              data?.map((crib) => (
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
                <h2 className="text-lg font-semibold text-gray-800">
                  {crib.name}
                </h2>
              
                {/* Price (hidden on hover) */}
                <p className="text-gray-600 mt-1 group-hover:hidden">
                  ${crib.price}
                </p>
              
                {/* Add to Cart button (visible on hover) */}
                <button className="hidden group-hover:block text-[#DB915E]   rounded transition duration-300">
                  Add to Cart
                </button>
              </div>
              
              ))
            }
          </div>
        </div>
    );
};

export default Carriage;
