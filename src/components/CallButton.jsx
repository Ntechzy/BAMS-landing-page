import React from 'react';

const CallButton = () => {
  const phoneNumber = "tel:+919528024473"; // Replace with your actual phone number

  return (
    <a
      href={phoneNumber}
      className="fixed bottom-6 left-6 z-50 bg-red-600 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-700 transition"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
        alt="Call"
        className="w-5 h-5 md:w-7 md:h-7"
      />
    </a>
  );
};

export default CallButton;

