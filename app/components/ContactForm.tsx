"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="py-20">
      <h1>Share your Initiative </h1>
      <div className="flex flex-col w-[600px] gap-3 pt-10">
        <div className="flex gap-3">
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="border-2 border-black rounded-[20px] py-3 px-5 text-xl font-normal flex-grow"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={college}
            placeholder="College / Affliliation"
            className="border-2 border-black rounded-[20px] py-3 px-5 text-xl font-normal flex-grow"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCollege(e.target.value);
            }}
          />
        </div>
        <textarea
          //   type="text"
          value={message}
          placeholder="What are you building/
              Any event you want to share /
              An Idea that needs funding"
          className="border-2 border-black rounded-[20px] h-[170px] py-3 px-5 text-xl font-normal resize-none no-scrollbar"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
        />

        {/* hover:border-2 hover:border-black hover:bg-white hover:text-black */}
        <button className="bg-[#1E1C1C] py-3 rounded-[20px] text-white  transition-all">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;