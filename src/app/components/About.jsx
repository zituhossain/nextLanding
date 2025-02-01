import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <p className="text-[28px] md:text-[36px] leading-[41.36px] font-bold">
          <span className="border-b-4 border-[#F15B2D] border-collapse py-8">
            What We Do?
          </span>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-[200px] pt-12 my-10">
        {/* Section Heading */}

        {/* Text */}
        <div className="lg:w-1/3 h-auto flex flex-col  gap-8 text-left bg-[#A6E2E2] p-10">
          <h5 className="text-[16px] md:text-[24px] leading-[30px] font-semibold">
            Bulipe Tech is a dynamic and innovative company
          </h5>
          <p className="mt-[-10px]">
            We empower individuals to unlock career opportunities through our
            proven Digital Skill Development program. Partnering with 300 local
            organisations and 3,000+ global partners in 21 countries, we provide
            access to top U.S. certifications.
          </p>

          {/* Buttons */}
          <div className="flex items-start">
            <button className="mt-[-10px] px-[20px] py-[10px] rounded-[24px] bg-[#004464] text-[#ffffff] hover:text-white flex items-center gap-2">
              Read More
              <BsArrowRightCircleFill />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-2/3 relative items-end mr-0 ml-auto">
          <Image
            src="/about.png"
            alt="Man"
            width={801}
            height={435}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
