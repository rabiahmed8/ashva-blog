import React from "react";

const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="flex gap-20">
        <div className="w-[30rem]">
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
        <div className="w-[30rem]">
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
    </div>
  );
};

export default AboutSection;
