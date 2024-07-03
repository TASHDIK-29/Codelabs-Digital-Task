import SectionHeading from "../../shared/SectionHeading";
import img1 from "../../assets/Media/testimonial1.png";
import img2 from "../../assets/Media/testimonial2.png";
import img3 from "../../assets/Media/testimonial3.png";
import img4 from "../../assets/Media/pagination.png";
import { FaStar } from "react-icons/fa";


const Testimonial = () => {
    return (
        <div className="space-y-8 px-8">
            <SectionHeading heading={'What they say about us'} subHeading={'Testimonial'}></SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="px-8 py-4 bg-white rounded-lg shadow-md ">
                    <div className="mt-2">
                        <h1 className="text-xl font-bold text-gray-700  hover:text-gray-600">Expertise and Compassion Combined</h1>
                        <p className="mt-2 text-gray-600 ">I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <img className=" object-cover w-10 h-10  rounded-full sm:block" src={img3} alt="avatar" />
                            <div>
                                <h3 className="font-bold text-gray-700">Sarah D, <span className="font-normal">IT Professional</span></h3>
                                <div className="flex gap-2">
                                    <FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-4 bg-white rounded-lg shadow-md ">
                    <div className="mt-2">
                        <h1 className="text-xl font-bold text-gray-700  hover:text-gray-600">Life-Saving Care, Life-Changing Experience</h1>
                        <p className="mt-2 text-gray-600 ">My experience at Healthcare Provider Name was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <img className=" object-cover w-10 h-10  rounded-full sm:block" src={img2} alt="avatar" />
                            <div>
                            <h3 className="font-bold text-gray-700">Michael R, <span className="font-normal">Business Executive</span></h3>
                                <div className="flex gap-2">
                                    <FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8 py-4 bg-white rounded-lg shadow-md ">
                    <div className="mt-2">
                        <h1 className="text-xl font-bold text-gray-700  hover:text-gray-600">A Partner in Health and
                        Wellness</h1>
                        <p className="mt-2 text-gray-600 ">As a busy professional, I appreciate the convenience and quality of care I receive at Healthcare Provider Name. From telemedicine consultations to routine check-ups, they have become my trusted partner in health and</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <img className=" object-cover w-10 h-10  rounded-full sm:block" src={img1} alt="avatar" />
                            <div>
                            <h3 className="font-bold text-gray-700">David S, <span className="font-normal">Lawyer</span></h3>
                                <div className="flex gap-2">
                                    <FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" /><FaStar className="text-yellow-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Testimonial;