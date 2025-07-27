import React, { useState } from "react";

const services = [
  {
    title: "Free Delivery",
    description:
      "Enjoy your favorite meals without any extra cost—no delivery charges, ever. Just good food, right at your doorstep.",
    img: "https://quickeat-react.vercel.app/assets/img/service-icon-2.svg",
    hoverImg: "https://quickeat-react.vercel.app/assets/img/service-icon-1.svg",
    bg: "hover:shadow-md hover:-translate-y-1 hover:bg-gradient-to-br from-orange-400 to-orange-500 hover:text-white",
  },
  {
    title: "Save Your Time",
    description:
      "Skip the cooking and long wait times. Order in seconds and let us handle the rest while you focus on what matters most.",
    img: "https://quickeat-react.vercel.app/assets/img/service-icon-3.svg",
    hoverImg: "https://quickeat-react.vercel.app/assets/img/service-icon-4.svg",
    bg: " hover:shadow-md hover:-translate-y-1 hover:bg-gradient-to-br from-orange-400 to-orange-500 hover:text-white",
  },
  {
    title: "Regular Discounts",
    description:
      "Why pay more? Unlock amazing deals and exclusive discounts on your favorite dishes—every single week.",
    img: "https://quickeat-react.vercel.app/assets/img/service-icon-5.svg",
    hoverImg: "https://quickeat-react.vercel.app/assets/img/service-icon-6.svg",
    bg: "hover:shadow-md hover:-translate-y-1 hover:bg-gradient-to-br from-orange-400 to-orange-500 hover:text-white",
  },
  {
    title: "Variety Food",
    description:
      "From spicy street food to gourmet meals, explore a wide range of cuisines and dishes—all in one place.",
    img: "https://quickeat-react.vercel.app/assets/img/service-icon-7.svg",
    hoverImg: "https://quickeat-react.vercel.app/assets/img/service-icon-8.svg",
    bg: "hover:shadow-md hover:-translate-y-1 hover:bg-gradient-to-br from-orange-400 to-orange-500 hover:text-white",
  },
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-2xl p-10 transition-all shadow-md duration-300 transform cursor-pointer${
        service.bg
      } ${!service.bg.includes("orange") ? "hover:shadow-md hover:-translate-y-1" : "hover:shadow-xl"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? service.hoverImg : service.img}
        alt={service.title}
        className="mb-4 h-20 w-20 transition-all duration-300"
      />
      <h3 className="text-[40px] font-bold mb-2">{service.title}</h3>
      <p className="text-sm leading-relaxed">{service.description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="px-4 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesSection;
