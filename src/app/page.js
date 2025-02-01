import Image from "next/image";
import Card from "./components/Card";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const cardData = [
  {
    image: "/cardImg1.svg",
    title: "Master In-Demand Digital Skills to Advance Your Career",
    content:
      "Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!",
  },
  {
    image: "/cardImg2.svg",
    title: "Earn Vendor Certifications and Join Us",
    content:
      "Our post-training assessments connect you with leading U.S. certification providers. Join over 3,000 global partners across 21+ countries and begin your career today!",
  },
  {
    image: "/cardImg3.svg",
    title: "Start Earning BDT 30,000 Monthly and Grow Your Skills",
    content:
      "Salary-based employment starting at BDT 30,000, with the potential to exceed BDT 3,00,000+ as you up-skill and master new digital skills. Your earning potential is limitless.",
  },
];

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-[8rem] p-4 h-full items-center px-4 sm:px-8 md:px-[200px]">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>

      {/* About Section */}
      <div>
        <About />
      </div>
    </div>
  );
}
