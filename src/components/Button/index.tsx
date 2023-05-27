"use client";

import React from "react";

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode | string;
  bold?: boolean;
  theme?: "";
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  content,
  icon,
  theme,
  type,
  bold,
  className,
  onClick,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={() => (onClick && onClick()) || undefined}
        className={`buttonContainer button${theme || ""} ${className || ""}`}
      >
        <div className="buttonIcon" style={{ color: "black" }}>
          {icon}
        </div>
        <div
          style={bold ? { fontWeight: "700" } : {}}
          className="buttonContent"
        >
          {content}
        </div>
      </button>
    </>
  );
};
