"use client";

import React from "react";

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode | string;
  size?: "large";
  theme?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
  padding?: boolean;
  width?: string;
  height?: string;
  effect?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  effect,
  content,
  icon,
  theme,
  size,
  type,
  className,
  padding,
  width,
  height,
  onClick,
}) => {
  const styleValidation = () => {
    if (size === "large") {
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        type={type}
        onClick={() => (onClick && onClick()) || undefined}
        className={`buttonContainer button${size || ""} ${theme || "primary"} ${
          className || ""
        }`}
        style={styleValidation()}
      >
        {icon && (
          <div className="buttonIcon" style={{ color: "black" }}>
            {icon}
          </div>
        )}
        <div
          className={`buttonContent ${size === "large" && "-large"}`}
          style={size === "large" ? { transform: "skew(40deg)" } : {}}
        >
          {content}
        </div>
      </button>
      {effect && (
        <div className="buttonContainerEffectWrapper">
          <button
            type={type}
            onClick={() => (onClick && onClick()) || undefined}
            className={`buttonContainerEffect button${size || ""} ${
              className || ""
            }`}
            style={{ padding: "16px 146px", transform: "skew(-40deg)" }}
          >
            {icon && (
              <div className="buttonIcon" style={{ color: "black" }}>
                {icon}
              </div>
            )}
            <div className="buttonContentEffect">{content}</div>
          </button>
        </div>
      )}
    </div>
  );
};
