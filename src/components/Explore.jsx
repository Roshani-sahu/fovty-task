import React from "react";

const categories = [
  { label: "Wedding Venues", image: "https://media.weddingz.in/images/79881960b689015ffe963a520fc6691d/wedding-lawns-in-indore-which-will-leave-you-mesmerized.jpg" },
  { label: "Bridal Makeup Artists", image: "https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1668590730347-Q9TGOY0S9TEBGIYO4R8X/Disha+Buxani+Makeup+Artist+Bangalore++-1.jpg" },
  { label: "Photo/Video", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5ut8XMusAuKikgHyygluV8bke5HYi-WBYA&s" },
  { label: "Music & DJ", image: "https://cdn0.weddingwire.in/article/3207/original/1280/jpg/47023-sangeet-dance-the-wedding-story-tech-support.jpeg" },
  { label: "Catering", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4u29d1T-TXz2TZTjFpylGl-JVuVvTl6hhw&s" },
  { label: "Decor", image: "https://i.pinimg.com/236x/2d/43/75/2d4375135408c40b54daf7da829fcdbd.jpg" },
];

const destinations = [
  { label: "Goa", image: "https://cdn.abhibus.com/2024/05/Things-to-Do-in-North-Goa.jpg" },
  { label: "Udaipur", image: "https://i0.wp.com/travelshoebum.com/wp-content/uploads/2017/12/dsc_8144.jpg?fit=1024%2C678&ssl=1" },
  { label: "Jaipur", image: "https://media.architecturaldigest.in/wp-content/uploads/2016/03/Feature-image-1-1366x768.jpg" },
  { label: "Delhi NCR", image: "https://www.kalitravel.net/blog/wp-content/uploads/delhi-itinerary-india-gate-sunset-new-delhi.webp" },
  { label: "Mumbai", image: "https://assets.cntraveller.in/photos/67060b030871a221e9f6bd88/3:2/w_5004,h_3336,c_limit/GettyImages-520120864.jpg" },
  { label: "Bangalore", image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/bangalore-famous.jpg" },
  { label: "Indore", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgFlN4ewFw5maFLICjzCRilCcN629VaO2qQ&s" },
  { label: "View All", image: "https://www.birlatrimayaa.in/images/birla/about-bangalore.webp" },
];

export default function Explore() {
  return (
    <div className="h-auto bg-[#fff8f6] py-16 px-4">
        <div className="mt-24">
      {/* Top Categories */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Explore Top <span className="text-[#EF4A6B]">Categories</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mb-20">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-xl transition w-[140px] md:w-[180px] md:h-[230px] text-center p-3"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-[160px] h-[160px] object-cover rounded-lg mb-2"
            />
            <p className="text-sm mt-5 font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Popular Destinations */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10  ">
        Popular <span className="text-[#EF4A6B]">Wedding</span> Destinations
      </h2>
      <div className="flex flex-wrap justify-center gap-20 ">
        {destinations.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.label}
              className="w-20 h-20 md:w-[119px] md:h-[119px] object-cover rounded-full shadow"
            />
            <p className="mt-2 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
