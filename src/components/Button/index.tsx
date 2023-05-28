"use client";

import React from "react";

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode | string;
  theme?: "large";
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
  className,
  padding,
  width,
  height,
  onClick,
}) => {
  const styleValidation = () => {
    if (theme === "large") {
      return { padding: "16px 146px", transform: "skew(-40deg)" };
    }
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
        {icon && (
          <div className="buttonIcon" style={{ color: "black" }}>
            {icon}
          </div>
        )}
        <div
          style={theme === "large" ? { transform: "skew(40deg)" } : {}}
          className="buttonContent"
        >
          {content}
        </div>
      </button>
    </>
  );
};
