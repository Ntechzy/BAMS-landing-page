import React from "react";
import Image1 from "/assets/InstaPost/post-6.jpg";
import Image2 from "/assets/InstaPost/insta1.jpg";
import Image3 from "/assets/InstaPost/post-9.jpg";
import Image4 from "/assets/InstaPost/insta2.jpg";
import Image5 from "/assets/InstaPost/post-5.jpg";
import Image6 from "/assets/InstaPost/insta3.jpg";

const posts = [
  { image: Image1, link: "https://www.instagram.com/namcagra", type: "photo" },
  { image: Image2, link: "https://www.instagram.com/namcagra", type: "video" },
  { image: Image3, link: "https://www.instagram.com/namcagra", type: "photo" },
  { image: Image4, link: "https://www.instagram.com/namcagra", type: "video" },
  { image: Image5, link: "https://www.instagram.com/namcagra", type: "photo" },
  { image: Image6, link: "https://www.instagram.com/namcagra", type: "video" },
];

const InstagramPostGrid = () => {
  return (
    <div className="py-8 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">
        See our world! <span className="text-yellow-600">Follow us on Instagram</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-xl shadow-md group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl/20"
          >
            <img
              src={post.image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-90 object-bottom"
            />

            {post.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramPostGrid;
