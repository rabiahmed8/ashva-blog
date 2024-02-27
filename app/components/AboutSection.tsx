"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [objToggle, setObjToggle] = useState(0);
  

  const objectives = [
    {
      key: 0,
      heading: "Facilitate Collaboration",
      content:
        "Connect young Malaysian innovators with local counterparts, industry leaders, and government agencies to accelerate the development and commercialization of their ideas.",
    },
    {
      key: 1,
      heading: "Offer Mentorship",
      content:
        "Provide guidance and support from experienced entrepreneurs and industry professionals, fostering a culture of innovation and entrepreneurship.",
    },
    {
      key: 2,
      heading: "Technology Transfer",
      content:
        "Bridge the gap between cutting-edge research at U.S. universities and real-world application in Malaysia, boosting the nation's technological advancement.",
    },
    {
      key: 3,
      heading: "Talent Repatriation",
      content:
        "Encourage young Malaysians to return and contribute their skills and expertise, enriching the local talent pool.",
    },
    {
      key: 4,
      heading: "Drive Economic Growth",
      content:
        "Foster the creation of innovative businesses and products, contributing to Malaysia's economic diversification and competitiveness.",
    },
  ];

  return (
    <div id="about" className="py-20">
      {/* vision / Mission */}
      <div className="flex gap-20 flex-wrap">
        <div className="max-w-[30rem]">
          <h1 className="font-bold text-5xl">Vision</h1>
          <p className="font-normal text-2xl pt-6">
            To be a <span className="text-3xl text-[#EE8C19]">vibrant hub</span>{" "}
            connecting young{" "}
            <span className="text-3xl text-[#EE8C19]">Malaysian graduates</span>{" "}
            from U.S. universities with their homeland, fostering{" "}
            <span className="text-3xl text-[#EE8C19]">innovation</span> and
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            propelling Malaysia's future{" "}
            <span className="text-3xl text-[#EE8C19]">economic growth.</span>
          </p>
        </div>
        <div className="max-w-[30rem]">
          <h1 className="font-bold text-5xl">Mission</h1>
          <p className="font-normal text-2xl pt-6">
            To attract, nurture, and support{" "}
            <span className="text-3xl text-[#EE8C19]">
              young Malaysian innovators
            </span>
            , facilitating the{" "}
            <span className="text-3xl text-[#EE8C19]">
              transfer of knowledge
            </span>{" "}
            , technology, and talent back to Malaysia through collaborative
            programs, mentorship, and access to resources.
          </p>
        </div>
      </div>

      <h1 className="py-12">Objectives</h1>
      <div className="flex flex-wrap gap-4">
        {objectives.map(({ key, heading }) => (
          <div
            key={key}
            onClick={() => {
              setObjToggle(key);
            }}
            className={`${objToggle == key ? "bg-black text-white" : ""}
              ${key == 0 ? "first-button" : ""}
              flex  items-end py-4 px-6 flex-grow place-content-center border-[3px] border-black text-xl font-medium cursor-pointer transition-all`}
          >
            {heading}{" "}
            <span
              className={`${
                objToggle == key ? "z-20" : ""
              } translate-x-5 text-white`}
            >
              {">"}
            </span>
            <Image
              className="z-10"
              src="/arrow-icon.png"
              alt="ArrowIcon"
              width={30}
              height={30}
            />
          </div>
        ))}
      </div>

      {objectives[objToggle].key === objToggle && (
        <p className="pt-12 text-2xl font-normal">
          {objectives[objToggle].content}
        </p>
      )}
    </div>
  );
};

export default AboutSection;
