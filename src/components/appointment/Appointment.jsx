import img from "../../assets/Media/logo light.png"
import { FiArrowUpRight } from "react-icons/fi";


import "./apoinment.css";

const Appointment = () => {
    return (
        <div className="p-2">
            <div className=" bg-gradient-img rounded-3xl">
                <div className=" flex justify-center md:justify-end p-4 md:p-10">
                    <img src={img} alt="" />
                </div>
                <div className="px-8 md:px-20 md:py-10 space-y-5">
                    <h1 className="text-white text-2xl md:text-4xl font-bold flex flex-col space-y-3"><span>Get Your </span><span>First Appointment</span><span>at 50% Off!</span>

                    </h1>
                    <div className="md:flex gap-4">
                        <button className="flex items-center gap-2 px-3 py-3 bg-yellow-500 rounded-lg font-semibold mb-2 md:mb-0">Appointment <FiArrowUpRight className="text-lg" /></button>
                        <button className="flex items-center gap-2 px-3 py-3 border border-white text-white rounded-lg font-semibold">Learn More <FiArrowUpRight className="text-lg" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;