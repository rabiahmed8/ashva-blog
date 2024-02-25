import React, { ReactNode } from "react";

interface TooltipProps {
  message: string;
  children: ReactNode;
}

const ToolTip = ({ message, children }: TooltipProps) => {
  return (
    <div className="group relative">
      {children}
      <span className="absolute top-[-3.2rem] left-[-1.4rem] scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};

export default ToolTip;
