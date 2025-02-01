import { ImCross } from "react-icons/im";

const TopNav = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-[200px] bg-[#a6e2e2]">
      {/* Top Logo */}
      <div className="font-bold text-6xl">
        <h1 className="bg-gradient-to-b from-[#FF3535] to-[#FFCC00] bg-clip-text text-transparent text-4xl font-bold">
          100%
        </h1>
      </div>

      {/* Middle section */}
      <div className="hidden md:flex gap-4 text-[#004464] h-[86px] items-center justify-center">
        <div className="border border-[#004464] p-[6px] rounded-lg my-2">
          <p className="text-[#004464] text-[18px] font-semibold">
            <span className="text-[#f15b2d]">Scholarship</span> on all <br /> of
            our programs
          </p>
        </div>
        <div className="ml-12">
          <p className="">
            Exclusively for the physically challenged, and third-gender
            communities!
          </p>
        </div>
      </div>

      {/* Cross */}
      <div className="text-white">
        <ImCross className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNav;
