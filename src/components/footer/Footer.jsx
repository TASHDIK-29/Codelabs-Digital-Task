import img1 from "../../assets/Media/logo light.png"
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#020043] mt-20">
            <div className="container p-20 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="space-y-5">
                            <img src={img1} alt="" />
                            <p className="text-white">123 Main Street Anytown, USA <br />Postal Code: 12345</p>
                            <p className="text-white">Support: support@oyolloo.com <br />
                                Available : 10:00am to 07:00pm</p>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            <div className="space-y-3">
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Home</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About us
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Success Page
                                </a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Terms and condition
                                </a>
                            </div>

                            <div className="space-y-3">
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Services</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Scheduling</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact Us</a>
                                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Patient Portal</a>
                            </div>

                            <div>
                                <h3 className="text-gray-700 uppercase dark:text-white">Follow Us</h3>
                                <div className="flex gap-3 mt-2 mb-6">
                                    <a href=""><FaFacebook  className="text-xl text-white" /></a>
                                    <a href=""><FaInstagram className="text-xl text-white" /></a>
                                    <a href=""><FaLinkedin  className="text-xl text-white" /></a>
                                    <a href=""><FaYoutube   className="text-xl text-white" /></a>   
                                </div>
                                <div>
                                    <p className="text-start text-gray-500 dark:text-gray-400">@docplus 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;