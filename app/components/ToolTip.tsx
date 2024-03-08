import React, { ReactNode } from "react";
import { TooltipProps } from "../constants/DTO";

const ToolTip = ({ message, children }: TooltipProps) => {
  return (
    <div className="group relative">
      {children}
      <span className="absolute left-[-1.3rem] top-[-2.2rem] z-[9999] scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};

export default ToolTip;
