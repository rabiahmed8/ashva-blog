"use client";
import React, { useState } from "react";
import { contactForm } from "../apiCalls/apiCalls";

export interface Details {
  fname:string;
  email:string;
  suggestion:string;
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const BASE_URL_3 = 'https://ashva.pythonanywhere.com/waitlist';

  const details:Details = {
    fname: name,
    email: email,
    suggestion: message
  };

  const handleClick = async () =>{
    await contactForm(BASE_URL_3,details)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div id="contact" className="py-20">
      <h1>Share your Initiative </h1>
      <div className="flex flex-col max-w-[600px] gap-3 pt-10">
        <div className="flex gap-3">
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="border-2 border-black rounded-[20px] py-3 px-5 text-xl font-normal flex-grow w-full"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="border-2 border-black rounded-[20px] py-3 px-5 text-xl font-normal flex-grow w-full"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
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
        <button onClick={handleClick} className="bg-[#1E1C1C] py-3 rounded-[20px] text-white  transition-all">Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;