import React from "react";

const weddings = [
  {
    title: "Anaya & Kunal – Udaipur",
    desc: "A royal celebration in the City of Lakes with heritage vibes and floral fantasy.",
    venue: "Taj Aravali",
    planner: "DreamKnots",
    photographer: "LensTown",
    img: "https://shaadiwish.com/blog/wp-content/uploads/2022/03/wedding-photography-1.jpg",
  },
  {
    title: "Mira & Raghav – Goa",
    desc: "A beach-side mehndi, sunset pheras, and vibrant tropical decor made this...",
    venue: "Novotel Goa",
    makeup: "Glam by Neha",
    decor: "Petal & Pine",
    img: "https://i0.wp.com/trulymadly.com/blog/wp-content/uploads/2021/11/91c463f4f3e44f19ceb19be6a1549c1d-e1636350828583.jpg?resize=562%2C659&ssl=1",
  },
  {
    title: "Sanya & Aarav – Delhi",
    desc: "Elegant pastel themes, live Sufi music, and a candlelit reception created time...",
    venue: "Taj Aravali",
    planner: "DreamKnots",
    photographer: "LensTown",
    img: "https://yoursphotographer.in/wp-content/uploads/2022/02/PicsArt_02-04-09.01.04-scaled.jpg",
  },
  {
    title: "Anaya & Kunal – Udaipur",
    desc: "A royal celebration in the City of Lakes with heritage vibes and floral fantasy.",
    venue: "Taj Aravali",
    planner: "DreamKnots",
    photographer: "LensTown",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmWm7x6ED16xYAGNaJGKjDS4nAUhv-IxE1aw&s",
  },
];

export default function RealWeddings() {
  return (
    <section className="py-16 h-[600px] mb-12 bg-white">
      <div className="text-center mb-10 ">
        <h2 className="text-3xl font-semibold">
          Real <span className="text-[#EF4A6B]">Weddings</span>, Real{" "}
          <span className="text-[#EF4A6B]">Magic</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-5xl mx-auto px-4">
          Get inspired by real couples who celebrated their love with unforgettable moments,
          handpicked vendors, and dreamy decor. From intimate home weddings to grand palace affairs—
          see how love stories come to life.
        </p>
      </div>

      <div className="flex flex-wrap justify-center  gap-12 px-4 ">
        {weddings.map((wed, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl w-[300px] overflow-hidden border hover:shadow-lg transition-shadow"
          >
            <img src={wed.img} alt={wed.title} className="w-full h-[180px] object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{wed.title}</h3>
              <p className="text-sm text-gray-600">{wed.desc}</p>
              <div className="text-xs text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Venue:</span> {wed.venue}{" "}
                  {wed.planner && <>Planner: {wed.planner}</>}
                </p>
                {wed.photographer && (
                  <p>
                    <span className="font-semibold">Photographer:</span> {wed.photographer}
                  </p>
                )}
                {wed.makeup && (
                  <p>
                    <span className="font-semibold">Makeup:</span> {wed.makeup}
                  </p>
                )}
                {wed.decor && (
                  <p>
                    <span className="font-semibold">Decor:</span> {wed.decor}
                  </p>
                )}
              </div>
              <div className="text-pink-500 flex justify-end text-sm font-medium cursor-pointer">View More</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
