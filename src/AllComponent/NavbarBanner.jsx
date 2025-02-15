import img from "../assets/rainbow.png";
import img1 from "../assets/hearth.png";
import img2 from "../assets/logo-img-1.png";
import img3 from "../assets/star.png";
import img4 from "../assets/cart-full-large.png";
import useCard from "../Hooks/useCard";

const NavbarBanner = () => {
  const { data } = useCard();

  // Calculate total amount
  const totalAmount = data?.reduce((acc, item) => acc + (item.price || 0), 0) || 0;

  return (
    <div className="flex justify-between items-center container mx-auto bg-white mt-10">
      <div className="flex justify-center items-center flex-col">
        <img src={img} alt="" className="hover:-translate-y-1 " />
        <h1>New In</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src={img3} alt="" className="hover:-translate-y-1" />
        <h1>About us</h1>
      </div>
      <div className="w-56 pb-5 flex justify-center items-center flex-col">
        <img src={img2} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <img src={img1} alt="" className="hover:-translate-y-1" />
        <h1>WishList</h1>
      </div>
      <div className="flex justify-center items-center flex-col relative">
        <img src={img4} alt="" className="hover:-translate-y-1" />
        <h1>Cart</h1>
        {/* Display Total Amount */}
        <p className="text-sm text-gray-700 font-semibold mt-1">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default NavbarBanner;
