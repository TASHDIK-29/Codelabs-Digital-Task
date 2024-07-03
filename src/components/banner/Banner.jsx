import bannerImg from "../../assets/Media/banner.png";
import chart from "../../assets/Media/chart.png";
import camera from "../../assets/Media/camera.png";
import contract from "../../assets/Media/contract.png";
import coin from "../../assets/Media/coin.png";
import people from "../../assets/Media/people.png";

import './banner.css'

const Banner = () => {
    return (
        <div className="p-2">
            <img className="mx-auto" src={bannerImg} alt="" />
            {/* <div className="banner-img"></div> */}
            
            <div className="h-80 hidden lg:grid lg:grid-cols-5 lg:grid-rows-3 my-6">
                <div className=" row-span-3 py-4 rounded-2xl flex items-end px-8">
                    <div className="shadow-lg py-2 rounded-2xl">
                        <div className="mb-4 px-2">
                            <h1 className="text-3xl font-bold">90%</h1>
                            <p>Patient satisfaction rate, reflecting our commitment.</p>
                        </div>
                        <img className="mx-auto" src={chart} alt="" />
                    </div>
                </div>
                <div className=" col-span-3 py-4">
                    <h1 className="text-center text-4xl font-bold">
                        Comprehensive Care <br /> for Every Patient
                    </h1>
                </div>
                <div className=" row-span-3  py-4 rounded-2xl flex items-end px-8">
                    <div className="shadow-lg p-2 rounded-2xl">
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold">50+</h1>
                            <p>Free lesson video for patient</p>
                        </div>
                        <img className="mx-auto" src={camera} alt="" />
                    </div>
                </div>
                <div className=" row-span-2 rounded-2xl flex items-end p-4">
                    <div className="shadow-lg p-2 rounded-2xl w-full">
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold">500+</h1>
                            <p>Board-certified doctors</p>
                        </div>
                        <div className="flex justify-end h-1/3">
                            <img className="" src={contract} alt="" />
                        </div>
                    </div>
                </div>
                <div className=" row-span-2 flex items-end p-4">
                    <div className="shadow-lg p-4 w-full rounded-2xl">
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold">4.8</h1>
                            <p>Over 20,000 Patient</p>
                        </div>
                        <img className="" src={people} alt="" />
                    </div>
                </div>
                <div className=" row-span-2 rounded-2xl flex items-end p-4">
                    <div className="shadow-lg p-2 rounded-2xl w-full">
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold">$5000</h1>
                            <p>Money spend for poor patient</p>
                        </div>
                        <div className="flex justify-end h-1/3">
                            <img className="" src={coin} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
                <div className="py-4">
                    <h1 className="text-center text-4xl font-bold">
                        Comprehensive Care <br /> for Every Patient
                    </h1>
                </div>
                <div className="grid grid-cols-2">
                    <div className=" py-4 rounded-2xl flex items-end px-4">
                        <div className="shadow-lg p-2 rounded-2xl">
                            <div className="mb-4 px-2">
                                <h1 className="text-3xl font-bold">90%</h1>
                                <p>Patient satisfaction rate, reflecting our commitment.</p>
                            </div>
                            <img className="mx-auto" src={chart} alt="" />
                        </div>
                    </div>
                    <div className="  py-4 rounded-2xl flex items-end px-4">
                        <div className="shadow-lg p-2 rounded-2xl">
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold">50+</h1>
                                <p>Free lesson video for patient</p>
                            </div>
                            <img className="mx-auto" src={camera} alt="" />
                        </div>
                    </div>
                    <div className="  rounded-2xl flex items-end p-4">
                        <div className="shadow-lg p-2 rounded-2xl w-full">
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold">500+</h1>
                                <p>Board-certified doctors</p>
                            </div>
                            <div className="flex justify-end h-1/3">
                                <img className="" src={contract} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="  flex items-end p-4">
                        <div className="shadow-lg p-4 w-full rounded-2xl">
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold">4.8</h1>
                                <p>Over 20,000 Patient</p>
                            </div>
                            <img className="" src={people} alt="" />
                        </div>
                    </div>
                    <div className="  rounded-2xl flex items-end p-4">
                        <div className="shadow-lg p-2 rounded-2xl w-full">
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold">$5000</h1>
                                <p>Money spend for poor patient</p>
                            </div>
                            <div className="flex justify-end h-1/3">
                                <img className="" src={coin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;