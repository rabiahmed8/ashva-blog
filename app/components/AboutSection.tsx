"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { objectives } from "../constants/data";

const AboutSection = () => {
  const [objToggle, setObjToggle] = useState(0);

  return (
    <div id="about" className="py-20">
      {/* vision / Mission */}
      <div className="flex flex-wrap gap-20">
        <div className="max-w-[30rem]">
          <h1 className="text-5xl font-bold">Vision</h1>
          <p className="pt-6 text-2xl font-normal">
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
          <h1 className="text-5xl font-bold">Mission</h1>
          <p className="pt-6 text-2xl font-normal">
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
              flex  flex-grow cursor-pointer place-content-center items-end border-[3px] border-black px-3 py-4 text-lg font-medium transition-all`}
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
