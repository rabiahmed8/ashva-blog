"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Pin = ({ key, lat, long }: {key: number;lat: number;long: number }) => {

  return (
    <div
      key={key}
      className={`top size-5 test`}

      // className={`absolute top size-5 test`}
      // style={{ top: lat, left: long }}

    >
      <Image
        className="pin"
        src="/pin.png"
        alt="Location pin"
        width={20}
        height={20}
      />
      <div className="pin-shadow "></div>
    </div>
  );
};
export default Pin;
