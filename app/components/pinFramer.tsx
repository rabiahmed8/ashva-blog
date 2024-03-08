"use client";
import React, { createContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ToolTip from "./ToolTip";
import { PinContent } from "../constants/DTO";

const PinFramer = ({ message }: PinContent) => {
  // const PinFramer = () => {
  return (
    <>
      <ToolTip message={message}>
        <motion.div
          className="pin"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            y: [-20, 7, -9, 3, -5, 2, -3, 1],
            //   y: [-20, 100, 93, 100, 95, 100, 98, 100],
            opacity: [null, 0, 1, 0, 1, 0, 1, 1],
          }}
          transition={{ duration: 1, delay: 0 }}
        >
          <Image src="/pin.png" alt="Location pin" width={20} height={20} />
        </motion.div>
        {/* <motion.div
          className="w-fit pin"
          initial={{ scale: 0, opacity: 0, y: -2, x: -3 }}
          animate={{
            scale: [1.1, 0.4, 1, 0.5, 0.9, 0.6, 0.8, 0.7],
            opacity: [null, 0, 1, 0, 1, 0, 1, 1],
          }}
          transition={{ duration: 1, delay: 0 }}
        >
          <div className="pin-shadow2"></div>
        </motion.div> */}
      </ToolTip>
    </>
  );
};

export default PinFramer;
