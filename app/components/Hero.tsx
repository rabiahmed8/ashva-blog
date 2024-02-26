import Image from "next/image";
import React from "react";
import Pin from "./Pin";
import ToolTip from "./ToolTip";
import PinFramer, { PinContent } from "./pinFramer";

const Hero = () => {

  const pins:PinContent[]=[
    { key: 0, className: "washington", message: "Washington" },
    { key: 1, className: "Berkeley", message: "Berkeley" },
    { key: 2, className: "Stanford", message: "Stanford" },
    { key: 3, className: "CMU", message: "CMU" },
    { key: 4, className: "UCLA", message: "UCLA" },
    { key: 5, className: "Caltech", message: "Caltech" },
    { key: 6, className: "USC", message: "USC" },
    { key: 7, className: "UCSD", message: "UCSD" },
    { key: 8, className: "Rice", message: "Rice" },
    { key: 9, className: "WashU", message: "WashU" },
    { key: 10, className: "UIC", message: "UIC" },
    { key: 11, className: "UMich", message: "UMich" },
    { key: 12, className: "NotreDame", message: "Notre Dame" },
    { key: 13, className: "Purdue", message: "Purdue" },
    { key: 14, className: "Vanderbilt", message: "Vanderbilt" },
    { key: 15, className: "GeorgiaTech", message: "Georgia Tech" },
    { key: 16, className: "Duke", message: "Duke" },
    { key: 17, className: "VirginiaTech", message: "Virginia Tech" },
    { key: 18, className: "Georgetown", message: "Georgetown" },
    { key: 19, className: "JohnsHopkins", message: "Johns Hopkins" },
    { key: 20, className: "UPenn", message: "UPenn" },
    { key: 21, className: "Princeton", message: "Princeton" },
    { key: 22, className: "Columbia", message: "Columbia" },
    { key: 23, className: "Yale", message: "Yale" },
    { key: 24, className: "MIT", message: "MIT" },
    { key: 25, className: "Brown", message: "Brown" },
    { key: 26, className: "Cornell", message: "Cornell" }
  ];

  return (
    <div className="py-20">
      {/* first block */}
      <div className="flex justify-between pr-16 max-[1000px]:flex-col max-[1000px]:gap-[30px] place-content-center">
        {/* left */}
        <div className="flex flex-col">
          <h1 className="max-w-[512px]">Malaysian Diaspora Innovation Center</h1>
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

      <div className="mt-16 relative">
        <Image
          src="/usa-map.png"
          alt="USA Map"
          width={1200}
          height={800}
          className="w-[1400px] max-[1730px]:w-[860px] max-[900px]:w-[460px] max-[500px]:w-[286px]"
        />

        {pins.map(({key,className,message})=>(

        <div key={key} className={`absolute ${className}`}>
          <PinFramer
          key={key}
          className={className}
          message={message}
          />
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

        <p className="font-normal text-2xl mt-6">
          Malaysian Graduates in the USA
        </p>
      </div>
    </div>
  );
};

export default Hero;
