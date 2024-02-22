import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="py-20">
      {/* first block */}
      <div className="flex justify-between pr-16">
        {/* left */}
        <div className="flex flex-col">
          <h1 className=" w-[512px]">
            Malaysian Diaspora Innovation Center
          </h1>
          <p className="text-black font-normal text-xl mt-2">
            Harnessing Talent, Igniting Progress
          </p>
          <div className="flex gap-2 mt-5">
            <Image src="/flag-1.png" alt="flag-icon" width={34} height={34} />
            <Image src="/flag-2.png" alt="flag-icon" width={34} height={34} />
          </div>
        </div>

        {/* right */}
        <div className="flex align-middle">
          <div className="flex flex-col border-r-2 border-[#c5c5c5] pr-12 place-content-center">
            <Image
              src="graduates-icon.svg"
              alt="Graduates Icon"
              width={40}
              height={40}
              className="mb-7"
            />
            <h1 className="font-bold text-4xl">2000+</h1>
            <p className="font-normal text-2xl">Graduates</p>
          </div>

          <div className="flex flex-col pl-12 place-content-center">
            <Image
              src="/location-icon.png"
              alt="Location Icon"
              width={40}
              height={40}
              className="mb-7"
            />
            <h1 className="font-bold text-4xl">32+</h1>
            <p className="font-normal text-2xl">Cities</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Image src="/usa-map.png" alt="USA Map" width={1200} height={800} className="w-[1400px]" />
        <p className="font-normal text-2xl mt-6">
          Malaysian Graduates in the USA
        </p>
      </div>
    </div>
  );
};

export default Hero;
