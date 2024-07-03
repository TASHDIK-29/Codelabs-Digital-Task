import { FiArrowUpRight } from "react-icons/fi";
import navImg from "../../assets/Media/logo dark.png";

const Navbar = () => {

    const navLinks = <>
        <li className="text-violet-950 text-base font-semibold mx-4">Home</li>
        <li className="text-violet-950 text-base font-semibold mx-4">Service</li>
        <li className="text-violet-950 text-base font-semibold mx-4">Blog</li>
        <li className="text-violet-950 text-base font-semibold mx-4">About Us</li>

    </>
    return (
        <div className="navbar bg-base-100 my-4">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                        <button className="btn btn-outline text-violet-950">Appointment <FiArrowUpRight className="text-lg" /></button>

                    </ul>
                </div>
                <div className=" w-full mx-auto">
                    <img className="mx-auto lg:mx-0" src={navImg} alt="navImg" />
                </div>
            </div>
            <div className="navbar-center w-1/2 hidden lg:flex">
                <ul className="mx-8 menu menu-horizontal px-1">
                    {navLinks}

                </ul>
            </div>
            <div className="hidden lg:flex navbar-end">
                <button className="btn btn-outline text-violet-950">Appointment <FiArrowUpRight className="text-lg" /></button>
            </div>
        </div>
    );
};

export default Navbar;