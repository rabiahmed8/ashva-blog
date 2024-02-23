"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Pin from "./Pin";

const Hero = () => {
  const [pinPosition, setPinPosition] = useState<{ x: number; y: number }>({
    x: 6,
    y: 385,
  });
  const [pinSize, setPinSize] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      // Recalculate pin position when window is resized
      const mapImage = document.querySelector(".image") as HTMLElement;
      const pin = document.querySelector(".test") as HTMLElement;
      console.log("left: ", pin.style.left, "top: ", pin.style.top);

      if (mapImage) {
        const mapWidth = mapImage.clientWidth;
        const mapHeight = mapImage.clientHeight;
        console.log("image size: ", mapWidth, mapHeight);

        const pinLeftPercentage = (pinPosition.x / mapWidth) * 100;
        const pinTopPercentage = (pinPosition.y / mapHeight) * 100;

        const pinX = (pinPosition.x * mapHeight) / 933;
        const pinY = (pinPosition.y * mapWidth) / 1400;

        console.log("pin Position: ", pinX, pinY);

        // Update pin position
        setPinPosition({ x: pinX, y: pinY });
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pins = [
    { key: 0, lat: pinPosition.x, long: pinPosition.y },
    // { key: 1, lat: 165, long: 1140 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
    // { key: 1, lat: 52, long: 52 },
  ];

  return (
    <div className="py-20">
      {/* first block */}
      <div className="flex justify-between pr-16">
        {/* left */}
        <div className="flex flex-col">
          <h1 className=" w-[512px]">Malaysian Diaspora Innovation Center</h1>
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
          className="w-[1400px] image"
        />
        {pins.map(
          ({ key, lat, long }: { key: number; lat: number; long: number }) => (
            <Pin
              key={key}
              lat={pinPosition.x}
              long={pinPosition.y}
              pinSize={pinSize}
            />
          )
        )}

        <p className="font-normal text-2xl mt-6">
          Malaysian Graduates in the USA
        </p>
      </div>
    </div>
  );
};

export default Hero;
