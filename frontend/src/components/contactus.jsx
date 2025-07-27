import React from "react";

const contactDetails = [
  {
    title: "Address",
    icon: "fas fa-map-marker-alt text-yellow-500 text-5xl mb-4",
    lines: [
      "Bishalgarh,sepahijala",
      "Pin 799102,",
      "Tripura, India",
    ],
    bg: "bg-white",
    hoverBg: "hover:bg-orange-100",
  },
  {
    title: "Email",
    icon: "fas fa-envelope text-yellow-500 text-5xl mb-4",
    lines: [
      "ZocalFood@gmail.com",
      "ZocalFood.",
      "jaydebdaas@gmail.com",
      "owner",
    ],
    bg: "bg-white",
    hoverBg: "hover:bg-orange-100",
  },
  {
    title: "Phone",
    icon: "fas fa-phone-alt text-yellow-500 text-5xl mb-4",
    lines: [
      "+91 718924810",
      "zocal food",
      "91 89236711390",
      "delivery",
    ],
    bg: "bg-white",
    hoverBg: "hover:bg-orange-100",
  },
];

const ContactCard = ({ icon, lines, bg, hoverBg }) => {
  return (
    <div
      className={`rounded-2xl p-6 transition-all duration-300 hover:bg-gray-900 hover:text-white shadow-md hover:shadow-lg`}
    >
      
      <i className={icon}></i>
      {lines.map((line, idx) => (
        <p
          key={idx}
          className={`text-sm ${idx % 2 === 0 ? "font-semibold" : "text-gray-500"} ${
            bg.includes("gray") ? "text-white" : ""
          }`}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="px-4 md:px-16 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Contact us</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-2">
   Have a question or need help with your order? Let’s talk—we’re here for you 24/7. We’re here to assist you. Whether it’s support, feedback, or business inquiries, feel free to get in touch with our team.

        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactDetails.map((item, idx) => (
          <ContactCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
