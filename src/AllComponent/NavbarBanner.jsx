import img from '../assets/rainbow.png'
import img1 from '../assets/hearth.png'
import img2 from '../assets/logo-img-1.png'
import img3 from '../assets/star.png'
import img4 from '../assets/cart-full-large.png'
const NavbarBanner = () => {
    return (
        <div className='flex justify-between items-center  container mx-auto bg-white mt-10'>
            <div className='flex justify-center items-center flex-col'>
                <img src={img} alt="" className='hover:-translate-y-1 ' />
                <h1>New In</h1>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={img3} alt="" className='hover:-translate-y-1' />
                <h1>About us</h1>
            </div>
            <div className=' w-56 pb-5 flex justify-center items-center flex-col'>
                <img src={img2} alt="" />

            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={img1} alt="" className='hover:-translate-y-1' />
                <h1>WishList</h1>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <img src={img4} alt="" className='hover:-translate-y-1' />
                <h1>Card</h1>
            </div>
        </div>
    );
};

export default NavbarBanner;