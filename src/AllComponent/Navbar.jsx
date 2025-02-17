import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import img from '../assets/subscribe-icon.png'
import NavbarBanner from "./NavbarBanner";
import img1 from '../assets/logo-img-1.png'
import img2 from '../assets/cart-full-large.png'
import useCard from "../Hooks/useCard";

const Navbar = () => {
    const { data } = useCard()
    const totalAmount = data?.reduce((acc, item) => acc + (item.price || 0), 0) || 0;
    const menu = <>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Home</div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <Link to={'/demoInfo'}><li>Main Home</li></Link>
                    <Link to={'/demoInfo'}><li>Kids store</li></Link>
                    <Link to={'/demoInfo'}><li>Baby shop</li></Link>
                    <Link to={'/demoInfo'}><li>Landing</li></Link>





                </ul>
            </div>
        </NavLink>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Page</div>
                <ul tabIndex={0} className="dropdown-content menu  bg-white rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <Link to={'/demoInfo'}><li>About us</li></Link>
                    <Link to={'/demoInfo'}><li>FAQ Page</li></Link>
                    <Link to={'/demoInfo'}><li>Contact us</li></Link>
                    
                    
                    
                </ul>
            </div>
        </NavLink>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Shop</div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <Link to={'/demoInfo'}><li>Shop List</li></Link>
                    <Link to={'/demoInfo'}> <li>Shop Single</li></Link>
                    <Link to={'/demoInfo'}> <li>Shop Layout</li></Link>
                    
                   
                   


                </ul>
            </div>
        </NavLink>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Blog</div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <Link to={'/demoInfo'}> <li>Left Sidebar</li></Link>
                   <Link to={'/demoInfo'}> <li>Right Sidebar</li> </Link>
                   


                </ul>
            </div>
        </NavLink>
    </>


    return (
        <div>
            <div className="bg-[#F7F3F0]">
                <div className="container mx-auto">
                    <div className="navbar">
                        <div className="navbar-start">

                            <Link to={'/'} className=" hidden  tracking-[2px] lg:flex justify-center items-center gap-2 text-slate-600"> <img src={img} alt="" className='hover:-translate-y-2' />NEWSLETTER</Link>
                            <Link to={'/'} className="block lg:hidden">
                                <div className="w-24 h-14">
                                    <img className="w-full h-full" src={img1} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex ">
                            <ul className="menu gap-16 text-slate-700 menu-horizontal px-1">
                                {menu}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <div className=" lg:flex hidden lg:justify-center text-[#DB915E] text-lg lg:gap-5">
                                <p className=""><FaFacebookF></FaFacebookF></p>
                                <p><FaTwitter></FaTwitter></p>
                                <p><FaInstagram></FaInstagram></p>
                                <p><FaPinterestP /></p>
                            </div>
                            <Link to={'/cart'}>
                                <div className="w-16 h-10 flex lg:hidden flex-col justify-center items-center">
                                    <img className="w-full h-full" src={img2} alt="" />
                                    <p className="text-sm text-gray-700 font-semibold mt-1">${totalAmount?.toFixed(2)}</p>
                                </div>
                            </Link>

                            <div className="dropdown *:text-slate-600">

                                <div tabIndex={0} role="button" className="btn btn-ghost text-slate-600 lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="right-5 flex-col menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-96 p-2 shadow">
                                    {menu}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block w-[1100px] mx-auto py-10"> <NavbarBanner></NavbarBanner></div>
        </div>
    );
};

export default Navbar;