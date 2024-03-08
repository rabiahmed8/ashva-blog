import Image from "next/image";
import React from "react";
import Pin from "./Pin";
import ToolTip from "./ToolTip";
import PinFramer from "./pinFramer";
import { pinsData } from "../constants/data";

const Hero = () => {
  return (
    <div id="home" className="py-20">
      {/* first block */}
      <div className="flex place-content-center justify-between pr-16 max-[1000px]:flex-col max-[1000px]:gap-[30px]">
        {/* left */}
        <div className="flex flex-col">
          <h1 className="max-w-[512px]">
            Malaysian Diaspora Innovation Center
          </h1>
          <p className="mt-2 text-xl font-normal text-black">
            Harnessing Talent, Igniting Progress
          </p>
          <div className="mt-5 flex gap-2">
            <Image src="/flag-1.png" alt="flag-icon" width={34} height={34} />
            <Image src="/flag-2.png" alt="flag-icon" width={34} height={34} />
          </div>
        </div>

        {/* right */}
        <div className="flex align-middle">
          <div className="flex flex-col place-content-center border-r-2 border-[#c5c5c5] pr-12">
            <Image
              src="graduates-icon.svg"
              alt="Graduates Icon"
              width={40}
              height={40}
              className="mb-7"
            />
            <h1 className="text-4xl font-bold">2000+</h1>
            <p className="text-2xl font-normal">Graduates</p>
          </div>

          <div className="flex flex-col place-content-center pl-12">
            <Image
              src="/location-icon.png"
              alt="Location Icon"
              width={40}
              height={40}
              className="mb-7"
            />
            <h1 className="text-4xl font-bold">32+</h1>
            <p className="text-2xl font-normal">Cities</p>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        <Image
          src="/usa-map.png"
          alt="USA Map"
          width={1200}
          height={800}
          className="w-[1400px] max-[1730px]:w-[860px] max-[900px]:w-[460px] max-[500px]:w-[286px]"
        />

        {pinsData.map(({ key, className, message }) => (
          <div key={key} className={`absolute ${className}`}>
            <PinFramer message={message} />
          </div>
        ))}

        {/* <img
            src="/usa-map.png"
            alt="USA Map"
            className="map-image"
          /> */}
        {/* {pins.map(
            ({ key, lat, long }: { key: number; lat: number; long: number }) => (
              // eslint-disable-next-line react/jsx-key
              <ToolTip
              key={key}
              message={"Tooltip Message"}
              >
              <Pin
                key={key}
                lat={lat}
                long={long}
              />
              </ToolTip>
            )
          )} */}

        <p className="mt-6 text-2xl font-normal">
          Malaysian Graduates in the USA
        </p>
      </div>
    </div>
  );
};

export default Hero;
