import Image from "next/image";

export default function Card({ image, title, content }) {
  return (
    <div className="w-[370px] relative">
      <div className="p-4 bg-white shadow-lg shadow-white rounded-2xl text-gray-700 px-8 py-10 relative mt-[80px] md:mt-[-80px] ">
        {/* Circle Image Wrapper */}
        <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
          <div className="bg-[#004464] rounded-full w-[120px] h-[120px] flex items-center justify-center overflow-hidden  shadow-lg shadow-[#004464] p-2">
            <Image
              src={image}
              alt={title}
              className="rounded-full w-full h-full object-cover p-6 border-2 border-white"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="mt-12 text-center">
          <div className="font-bold">{title}</div>
          <div className="mt-2 text-sm text-[#848484] leading-[28px]">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
