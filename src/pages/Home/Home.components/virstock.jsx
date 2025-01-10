import React, { useRef } from 'react';
import logo from "../../../icon/stockimage.png";

const Virstock = ({ isVisible, onClose }) => {
    const modalRef = useRef(null);

    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center flex-col"
            onClick={handleOverlayClick}
        >
            <div
                className="bg-bgblue sm:rounded-3xl shadow-md w-[100vw] mx-2 sm:h-[80vh] max-w-5xl"
                ref={modalRef}
            >
                <div className="sm:p-0 mx-auto">
                    <div className="flex flex-col justify-center sm:flex-row items-center sm:rounded-3xl">
                        <div className="pic flex sm:rounded-l-3xl justify-center sm:h-[70vh] md:h-[80vh] sm:w-2/5 bg-cusgray items-center">
                            <img src={logo} alt="Logo" className="h-48 sm:rounded-l-3xl object-contain sm:w-full sm:h-full sm:object-cover" />
                        </div>
                        <div className="text-center p-4 pl-0 sm:pl-4 sm:rounded-r-3xl sm:w-3/5 sm:text-left md:px-8 font-comfortaa mx-auto">
                            <div className="text-[#F9754B] text-2xl font-bold mb-2 sm:text-4xl">VIRTUAL STOCKS</div>
                            <div className="text-white text-2xl sm:text-3xl">2022</div><br/>
                            <div className="text-white text-justify">
                                Virtual Stock Market is an event that simulates real-world stock trading in a digital
                                environment. Participants engage in buying and selling stocks using virtual currency, gaining hands-on experience in market strategies and investment decisions. The event offers insights into stock
                                market dynamics, fostering financial literacy and competitive skills in a risk-free setting.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center space-y-2 mt-4 z-50">
                <button
                    className="bg-blue-500 text-white py-2 px-4 w-48 rounded hover:bg-blue-600"
                    onClick={() => alert('Apply clicked')}
                >
                    Apply
                </button>
                <button
                    className="bg-green-500 text-white py-2 px-4 w-48 rounded hover:bg-green-600"
                    onClick={() => alert('Download clicked')}
                >
                    Download Guidelines
                </button>
            </div>

            {/* Close Button */}
            <div className="absolute top-4 right-4 z-50">
                <button
                    onClick={onClose}
                    className="bg-white text-gray-800 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Virstock;
