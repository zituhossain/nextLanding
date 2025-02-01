import Image from "next/image";
import { RiErrorWarningFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-8 px-4 sm:px-8 md:px-[200px] pt-12 bg-[#004464] text-white">
        {/* Text */}
        <div className="lg:w-1/2 h-auto md:h-[665px] flex flex-col  gap-8 text-left">
          <h5 className="text-[40px] md:text-[52px] leading-[62.4px]">
            <span className="text-[18px]">ELEVATING</span> <br /> IT Service
            Industry with Digital Skills Development
          </h5>
          <p className="mr-auto">
            Bulipe Tech as a visionary agent collaborates with its parent
            companies from the USA and UK to bring forth a far-reaching Digital
            Skills Development project for the ever-changing workforce of
            Bangladesh.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 items-start">
            <button className="px-[20px] py-[10px] rounded-[24px] bg-[#F15B2D] text-white hover:bg-transparent hover:border border-[#F15B2D] flex items-center gap-2">
              Enroll Now
              <Image src="/signup.svg" alt="signup" width={18} height={18} />
            </button>
            <button className="px-[20px] py-[10px] rounded-[24px] bg-transparent border border-[#F15B2D] text-[#F15B2D] hover:bg-[#F15B2D] hover:text-white flex items-center gap-2">
              Read More
              <RiErrorWarningFill />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="h-auto  relative items-end mr-0 ml-auto">
          <Image
            src="/hero.svg"
            alt="Man"
            width={532}
            height={485}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
