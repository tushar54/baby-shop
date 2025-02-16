import { useLocation } from "react-router-dom";
import Navbar from "../AllComponent/NavbarForCard";
import useCard from "../Hooks/useCard";
import axios from "axios";

const Cart = () => {
  const location = useLocation();
  const { data, refetch } = useCard();

  // Calculate the total for all items in the cart
  const total = data?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  // Function to update quantity
  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return; // Prevent negative or zero quantity

    try {
      await axios.patch(`https://server-side-tau-lovat.vercel.app/cart/${id}`, { quantity });
      refetch(); // Refresh cart data after update
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Function to remove item from cart
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`https://server-side-tau-lovat.vercel.app/deleteItem/${id}`);
      refetch(); // Refresh cart data after deletion
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleAllDelete=async()=>{
    try{
      await axios.delete('https://server-side-tau-lovat.vercel.app/deleteAll')
      alert('You have Successfully purchese')
      refetch()
    }
    catch(error)
    {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="m-5">
        <p>Home {location.pathname}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th></th> {/* Remove button column */}
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data?.map((item) => (
              <tr key={item._id} className="border-b">
                {/* Remove Button */}
                <td>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 text-xl font-bold"
                  >
                    ×
                  </button>
                </td>

                {/* Product Details */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <span className="text-gray-800">{item.name}</span>
                  </div>
                </td>

                {/* Price */}
                <td className="text-gray-700">${item.price?.toFixed(2)}</td>

                {/* Quantity Controls */}
                <td>
                  <div className="flex items-center border rounded-md w-auto justify-center">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="px-2 py-1 border-r"
                    >
                      –
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="px-2 py-1 border-l"
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Subtotal */}
                <td className="text-gray-800 font-semibold">
                  ${(item.price * item.quantity)?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>

          {/* Table Footer for Total */}
          <tfoot>

            <tr>
              <button onClick={handleAllDelete} className="btn bg-[#DB915E]">
                Purchese
              </button>
              <th colSpan="4" className="text-right pr-5">
                Total
              </th>
              <th className="text-gray-800 font-bold">${total?.toFixed(2)}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
