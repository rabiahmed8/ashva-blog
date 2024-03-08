"use client";
import React, { useState } from "react";
import { contactForm } from "../apiCalls/apiCalls";
import { Details } from "../constants/DTO";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const BASE_URL_3 = "https://ashva.pythonanywhere.com/waitlist";

  const details: Details = {
    fname: name,
    email: email,
    suggestion: message,
  };

  const handleClick = async () => {
    if (name !== "" && email !== "" && message !== "") {
      await contactForm(BASE_URL_3, details);
    } else {
      window.alert("Fill the form before submitting");
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact" className="py-20">
      <h1>Share your Initiative </h1>
      <div className="flex max-w-[600px] flex-col gap-3 pt-10">
        <div className="flex gap-3">
          <input
            type="text"
            value={name}
            placeholder="Name"
            className="w-full flex-grow rounded-[20px] border-2 border-black px-5 py-3 text-xl font-normal"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="w-full flex-grow rounded-[20px] border-2 border-black px-5 py-3 text-xl font-normal"
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
          className="no-scrollbar h-[170px] resize-none rounded-[20px] border-2 border-black px-5 py-3 text-xl font-normal"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
        />

        {/* hover:border-2 hover:border-black hover:bg-white hover:text-black */}
        {/* <button
          onClick={handleClick}
          className="bg-[#1E1C1C] hover:bg-[#383838] py-3 rounded-[20px] text-white  transition-all"
        >
          Submit
        </button> */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleClick}
          className="rounded-[20px] bg-[#1E1C1C] py-3 text-white hover:bg-[#383838]"
        >
          Submit
        </motion.button>
        {/* <motion.div
          className="bg-[#1E1C1C] py-3 rounded-[20px] text-white  transition-all"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        /> */}
      </div>
    </div>
  );
};

export default ContactForm;
