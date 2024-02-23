"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// const pins = [
//   { key: 0, lat: 502, long: 602 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
//   { key: 1, lat: 52, long: 52 },
// ];

// top-[${long}px] left-[${lat}px]
const Pin = ({ key, lat, long, pinSize }: {key: number;lat: number;long: number;pinSize:number }) => {

  return (
    <div
      key={key}
      className={`absolute top size-5 test`}
      style={{ top: lat, left: long }}

    >
      <Image
        className="pin"
        src="/pin.png"
        alt="Location pin"
        width={pinSize}
        height={20}
      />
      <div className="pin-shadow "></div>
    </div>
  );
};
export default Pin;
