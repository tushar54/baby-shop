import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import img from '../assets/subscribe-icon.png'
import NavbarBanner from "./NavbarBanner";
import img1 from '../assets/logo-img-1.png'
import img2 from '../assets/cart-full-large.png'

const Navbar = () => {

    const menu = <>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Home</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <li>Main Home</li>
                    <li>Kids store</li>
                    <li>Baby shop</li>
                    <li>Landing</li>

                </ul>
            </div>
        </NavLink>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Page</div>
                <ul tabIndex={0} className="dropdown-content menu  bg-base-100 rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <li>About us</li>
                    <li>FAQ Page</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </NavLink>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Shop</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <li>Shop List</li>
                    <li>Shop Single</li>
                    <li>Shop Layout</li>
                  

                </ul>
            </div>
        </NavLink>
        <NavLink>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-xl m-1">Blog</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 *:text-lg space-y-3 p-2 shadow-sm">
                    <li>Left Sidebar</li>
                    <li>Right Sidebar</li>
                    

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

                            <Link to={'/'} className=" hidden  tracking-[2px] lg:flex justify-center items-center gap-2"> <img src={img} alt="" className='hover:-translate-y-2' />NEWSLETTER</Link>
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
                            <div className="w-16 h-10 flex lg:hidden flex-col justify-center items-center">
                                <img className="w-full h-full" src={img2} alt="" />
                                <p>card</p>
                            </div>

                            <div className="dropdown">

                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="right-5 flex-col menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-96 p-2 shadow">
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