import { useState } from "react";
import img from "../assets/rainbow.png";
import img1 from "../assets/hearth.png";
import img2 from "../assets/logo-img-1.png";
import img3 from "../assets/star.png";
import img4 from "../assets/cart-full-large.png";
import useCard from "../Hooks/useCard";
import { Link } from "react-router-dom";
import axios from "axios";

const NavbarBanner = () => {
  const { data,refetch } = useCard();
  const [isOpen, setIsOpen] = useState(false);

  // Calculate total amount
  const totalAmount = data?.reduce((acc, item) => acc + (item.price || 0), 0) || 0;

  const handleAllDelete=async()=>{
    try{
      await axios.delete('https://server-side-tau-lovat.vercel.app/deleteAll')
      alert('You have Successfully purchese')
      refetch()
    }
    catch(error)
    {
      // console.log(error)
    }
  }

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center container mx-auto bg-white mt-10">
        <div className="flex justify-center items-center flex-col">
          <img src={img} alt="" className="hover:-translate-y-1 " />
          <h1 className="text-black">New In</h1>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={img3} alt="" className="hover:-translate-y-1" />
          <h1 className="text-black">About us</h1>
        </div>
        <div className="w-56 pb-5 flex justify-center items-center flex-col">
          <img src={img2} alt="" />
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={img1} alt="" className="hover:-translate-y-1" />
          <h1 className="text-black">WishList</h1>
        </div>
        <div
          className="flex justify-center items-center flex-col relative cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img src={img4} alt="" className="hover:-translate-y-1" />
          <h1 className="text-black">Cart</h1>
          <p className="text-sm text-gray-700 font-semibold mt-1">${totalAmount?.toFixed(2)}</p>
        </div>
      </div>

      {/* Drawer (Cart) */}
      <div className={`fixed top-0 z-50 right-0 h-full w-96 bg-white shadow-lg p-4 transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-xl text-slate-600 font-bold"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-slate-600">Shopping Cart</h2>

        {/* Cart Items */}
        <div className="space-y-4 min-h-96">
          {data?.length > 0 ? (
            data?.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-600">{item.name}</h3>
                  <p className="text-sm text-slate-600">${item?.price?.toFixed(2)}</p>
                </div>
                <span className="text-sm font-bold text-slate-600">x{item.quantity || 1}</span>
              </div>
            ))
          ) : (
            <p className="text-slate-600">Your cart is empty</p>
          )}
        </div>

        {/* Total Amount */}
        <div className="mt-4 border-t pt-4">
          <h3 className="font-bold">Total: ${totalAmount?.toFixed(2)}</h3>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center items-center gap-3">
          <button onClick={handleAllDelete} className="w-1/2 bg-[#DB915E] text-white py-2 mt-4 rounded">
            Purchese
          </button>
          <Link to={'/cart'} className="w-1/2 bg-[#DB915E] text-white py-2 mt-4 rounded text-center">
          <button>
            View Cart
          </button>
          </Link>
        </div>
      </div>

      {/* Overlay (Backdrop) */}

    </>
  );
};

export default NavbarBanner;
