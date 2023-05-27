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
  padding?: boolean;
  width?: string;
  height?: string;
}

export const Button: React.FC<ButtonProps> = ({
  content,
  icon,
  theme,
  type,
  bold,
  className,
  padding,
  width,
  height,
  onClick,
}) => {
  const styleValidation = () => {
    if (padding) {
      return { padding: "10px 24px" };
    }
    if (width) {
      if (height) {
        return { width: width, height: height };
      }
      return { width: width };
    }
    if (height) {
      return { height: height };
    } else {
      return {};
    }
  };

  return (
    <>
      <button
        type={type}
        onClick={() => (onClick && onClick()) || undefined}
        className={`buttonContainer button${theme || ""} ${className || ""}`}
        style={styleValidation()}
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
