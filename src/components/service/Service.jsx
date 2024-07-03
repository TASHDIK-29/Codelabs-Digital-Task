import SectionHeading from "../../shared/SectionHeading";
import { FiArrowUpRight } from "react-icons/fi";
import img1 from "../../assets/Media/service1.png";
import img2 from "../../assets/Media/service2.png";
import img3 from "../../assets/Media/service3.png";
const Service = () => {
    return (
        <div className="grid grid-cols-2 gap-0 ">
            <div className="pt-16 px-24 space-y-10 ">
                <SectionHeading heading={'Empowering Health, Enriching Lives'} subHeading={'Service'}></SectionHeading>

                <p>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                <button className="btn bg-yellow-500 hover:bg-yellow-500">Learn more <FiArrowUpRight className="text-lg" /></button>
            </div>
            <div className="relative p-6">
                <div className="">
                    <img className="rounded-3xl" src={img1} alt="" />
                </div>
                <div className="bg-violet-950/50 p-4 rounded-xl w-2/5  absolute bottom-12 left-12 flex">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Our mission is simple</h3>
                        <p className="text-xs text-white">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                    <div className="flex items-end">
                        <button className="bg-yellow-500 rounded-full p-2"><FiArrowUpRight className="text-xl text-white" /></button>
                    </div>
                </div>
            </div>
            <div className="relative p-6">
                <div className=" flex justify-end">
                    <img className="rounded-3xl" src={img2} alt="" />
                </div>
                <div className="bg-violet-950/50 p-4 rounded-xl w-2/5  absolute bottom-12 left-28 flex">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Online Doctor Meet</h3>
                        <p className="text-xs text-white">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                    <div className="flex items-end">
                        <button className="bg-yellow-500 rounded-full p-2"><FiArrowUpRight className="text-xl text-white" /></button>
                    </div>
                </div>
            </div>
            <div className="relative p-6">
                <div className="">
                    <img className="rounded-3xl" src={img3} alt="" />
                </div>
                <div className="bg-violet-950/50 p-4 rounded-xl w-2/5  absolute bottom-12 left-12 flex">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Consultancy your health</h3>
                        <p className="text-xs text-white">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                    </div>
                    <div className="flex items-end">
                        <button className="bg-yellow-500 rounded-full p-2"><FiArrowUpRight className="text-xl text-white" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;