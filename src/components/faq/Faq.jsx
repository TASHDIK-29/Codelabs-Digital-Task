import SectionHeading from "../../shared/SectionHeading";
import { FaAngleDown } from "react-icons/fa";


const Faq = () => {
    return (
        <div className="p-8">
            <SectionHeading heading={'Frequently Asked Question'} subHeading={'Faq'}></SectionHeading>
            <section className="">
                <div className="px-2 mx-auto">
                    <div className="mt-6 space-y-8">
                        <div className="bg-white shadow-md rounded-lg ">
                            <button className="flex items-center justify-between w-full px-8 py-4">
                                <h1 className="font-semibold text-gray-700 "> What are your office hours?</h1>

                                
                            </button>

                            <hr className="border-gray-200 " />

                                <p className="px-4 py-4 text-sm text-gray-500 ">
                                Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                                </p>
                        </div>

                        <div className="bg-white shadow-md rounded-lg ">
                            <button className="flex items-center justify-between w-full px-8 py-4">
                                <h1 className="font-semibold text-gray-700 ">How can I schedule an appointment?</h1>

                                <FaAngleDown className="text-xl" />
                            </button>
                        </div>

                        <div className="bg-white  shadow-md rounded-lg ">
                            <button className="flex items-center justify-between w-full px-8 py-4">
                                <h1 className="font-semibold text-gray-700 ">Do you accept insurance?</h1>

                                <FaAngleDown className="text-xl" />
                            </button>
                        </div>

                        <div className="bg-white shadow-md rounded-lg ">
                            <button className="flex items-center justify-between w-full px-8 py-4">
                                <h1 className="font-semibold text-gray-700 ">What should I bring to my appointment?</h1>

                                <FaAngleDown className="text-xl" />
                            </button>
                        </div>

                        <div className="bg-white shadow-md rounded-lg ">
                            <button className="flex items-center justify-between w-full px-8 py-4">
                                <h1 className="font-semibold text-gray-700 ">Do you offer telemedicine appointments?</h1>

                                <FaAngleDown className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;