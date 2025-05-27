import React from "react";
import Image1 from "/assets/InstaPost/post-1.jpg"
import Image2 from "/assets/InstaPost/post-2.jpg"
import Image3 from "/assets/InstaPost/post-3.jpg"
import Image4 from "/assets/InstaPost/post-4.jpg"
import Image5 from "/assets/InstaPost/post-5.jpg"
import Image6 from "/assets/InstaPost/post-6.jpg"
import Image7 from "/assets/InstaPost/post-7.jpg"
import Image8 from "/assets/InstaPost/post-8.jpg"

const posts = [
  {
    image: Image1,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: Image2,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image:Image3,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: Image4,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: Image5,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image:Image6,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: Image7,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    image: Image8,
    link: "https://www.instagram.com/namcagra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

const InstagramPostGrid = () => {
  return (
<div className="py-8 px-4 bg-gray-50">
  <h2 className="text-4xl font-bold text-center mb-8">
    See our world! <span className="text-yellow-600">Follow us on Instagram</span>
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
    {posts.map((post, index) => (
      <a
        href={post.link}
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        className="block transform transition duration-300 hover:scale-105 hover:z-10 hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="aspect-[4/4] w-full bg-gray-200 shadow-xl/20">
          <img
            src={post.image}
            alt={`Instagram post ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </a>
    ))}
  </div>
</div>


  );
};

export default InstagramPostGrid;
