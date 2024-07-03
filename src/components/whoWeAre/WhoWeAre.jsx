import { FiArrowUpRight } from "react-icons/fi";
import img from "../../assets/Media/whoweare.png";

const WhoWeAre = () => {
    return (
        <div className=" flex justify-between">
            <div className="w-1/2 px-8 space-y-10">
                <div className="space-y-4">
                    <button className=" rounded-2xl px-2 py-1">Who we are</button>
                    <h1 className="text-3xl font-bold">We Help To Get Solutions</h1>
                </div>
                <p>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                <button className="btn bg-yellow-500 hover:bg-yellow-500">Learn more <FiArrowUpRight className="text-lg" /></button>
            </div>
            <div className="w-1/2  relative">
                <div className="w-4/6 mx-auto ">
                    <img src={img} alt="" />
                </div>
                <div className="bg-violet-950 py-4 px-4 rounded-xl w-1/2 space-y-2 absolute top-56">
                    <h3 className="text-xl font-semibold text-white">Our mission is simple</h3>
                    <p className="text-sm text-white">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;