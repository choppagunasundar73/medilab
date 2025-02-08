import React from 'react';
import Lottie from 'lottie-react';
import medicalLoader from '../medical-loader.json';
import { FaHeartbeat, FaDna, FaFlask } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="loading-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Lottie Animation */}
      <div className="animation-container">
        <Lottie animationData={medicalLoader} loop={true} style={{ width: 200, height: 200 }} />
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl font-semibold mt-4">Analyzing Patient Data</h2>

      {/* Medical Icon Grid */}
      <div className="medical-icon-grid mt-4 flex space-x-4">
        <FaHeartbeat className="text-red-500 text-4xl animate-pulse" />
        <FaDna className="text-blue-500 text-4xl animate-spin" />
        <FaFlask className="text-green-500 text-4xl" />
      </div>

      {/* Progress Bar */}
      <div className="progress-bar w-3/4 bg-gray-300 mt-6 rounded-xl h-2 overflow-hidden">
        <div className="progress-fill bg-blue-600 h-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
