"use client";
import React, { createContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ToolTip from "./ToolTip";

export interface PinContent {
  x: number;
  y: number;
  css:string;
  message:string;
}

// const PinFramer = ({ x, y,css,message }: PinContent) => {
const PinFramer = () => {
  return (
    <>
      <ToolTip message={"Washington"}>
        <motion.div
          // className="pin"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: [-20, 7, -9, 3, -5, 2, -3, 1],
            //   y: [-20, 100, 93, 100, 95, 100, 98, 100],
            opacity: [null, 0, 1, 0, 1, 0, 1, 1],
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            //   className="pin"
            src="/pin.png"
            alt="Location pin"
            width={20}
            height={20}
          />
        </motion.div>
        <motion.div
          className="w-fit"
          initial={{ scale: 0, opacity: 0, y: -3 }}
          animate={{
            scale: [1.1, 0.4, 1, 0.5, 0.9, 0.6, 0.8, 0.7],
            opacity: [null, 0, 1, 0, 1, 0, 1, 1],
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="pin-shadow2"></div>
        </motion.div>
      </ToolTip>
    </>
  );
};

export default PinFramer;
