import React from "react";
import { benefitsData, programsData } from "../constants/data";

const ProrgramsBenefits = () => {

  return (
    <div className="py-20">
      <h1>Programs</h1>
      <div className="flex gap-x-11 gap-y-9 flex-wrap pt-10">
        {programsData.map(({ key, heading, content }) => (
          <div
            key={key}
            className="flex flex-col bg-[#D9D9D9] rounded-xl px-10 py-14 max-w-[450px] aspect-square justify-between"
          >
            <p className="text-2xl font-normal text-center">{heading}</p>
            <p className="text-lg font-normal text-center">{content}</p>
          </div>
        ))}
      </div>

      <h1 className="pt-40">Benefits for Malaysia</h1>
      <div className="flex gap-x-11 gap-y-9 flex-wrap pt-10 pb-20">
        {benefitsData.map(({ key, heading, content }) => (
          <div
            key={key}
            className="flex flex-col bg-[#D9D9D9] rounded-xl px-10 py-14 max-w-[450px] aspect-square justify-between"
          >
            <p className="text-2xl font-normal text-center">{heading}</p>
            <p className="text-lg font-normal text-center">{content}</p>
          </div>
        ))}
      </div>

      <h1 className="pt-20">
        Call to Action: <br></br>
        Making Malaysia a global hub for innovation
      </h1>
      <p className="pt-8 text-2xl font-normal">
        We urge the Malaysian government to recognize the immense potential of
        its diaspora and actively support the establishment of the Malaysian
        Diaspora Innovation Centre. By assigning dedicated ministries and
        government agencies to render support, providing financial grants, and
        facilitating deployment and marketing of these innovations, we can
        unlock a treasure trove of talent and propel Malaysia towards a
        brighter, more innovative future. Let us join hands and harness the
        ingenuity of our young minds, making Malaysia a global leader in
        innovation and a source of national pride.
      </p>
    </div>
  );
};

export default ProrgramsBenefits;
