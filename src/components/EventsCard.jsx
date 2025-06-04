import React from "react";

const EventCard = ({ image, title, date, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[400px] flex-shrink-0">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4 text-left">
        <h3 className="text-red-600 font-semibold text-lg">Events</h3>
        <p className="text-sm italic text-gray-500">{date}</p>
        
        <p 
          className="font-bold mt-1 truncate"
          style={{ maxWidth: "100%" }}
          title={title}
        >
          {title}
        </p>

        <a href={link} target="_blank" className="text-red-600 font-medium inline-flex items-center mt-2">
          Know More <span className="ml-1">➜</span>
        </a>
      </div>
    </div>
  );
};

export default EventCard;


