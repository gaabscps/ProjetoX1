"use client";

import React, { useState } from "react";
import styles from "./styles/styles.module.scss";

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode | string;
  size?: "large";
  theme?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
  margin?: string;
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
  width,
  height,
  margin,
  onClick,
}) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  //funções para lidar com estado hover/ativo do efeito do botão com efeito, acompanhando o estado do botão
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseDown = () => {
    setActive(true);
  };

  const handleMouseUp = () => {
    setActive(false);
  };

  // const styleValidation = () => {
  //   if (size === "large") {
  //     return { padding: "16px 125px", transform: "skew(-33deg)" };
  //   }
  //   if (width) {
  //     if (margin) {
  //       return { width: width, margin: margin };
  //     }
  //     if (height) {
  //       if (margin) {
  //         return { width: width, height: height, margin: margin };
  //       }
  //       return { width: width, height: height };
  //     }
  //     return { width: width };
  //   }
  //   if (margin) {
  //     return { margin: margin };
  //   }
  //   if (height) {
  //     if (margin) {
  //       return { height: height, margin: margin };
  //     }
  //     return { height: height };
  //   } else {
  //     return {};
  //   }
  // };

  const styleValidation = () => {
    const style = {
      padding: "",
      transform: "",
      width: "",
      height: "",
      margin: "",
    };

    if (size === "large") {
      style.padding = "16px 125px";
      style.transform = "skew(-33deg)";
    }

    if (width) {
      style.width = width;
    }

    if (height) {
      style.height = height;
    }

    if (margin) {
      style.margin = margin;
    }

    return style;
  };

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        type={type}
        onClick={() => (onClick && onClick()) || undefined}
        className={`buttonContainer text-small-700
        ${hover && styles.buttonContainerHover}
        ${active && styles.buttonContainerActive} button${size || ""} ${
          theme || "primary"
        } ${className || ""}`}
        style={styleValidation()}
      >
        {icon && (
          <div className="buttonIcon" style={{ color: "black" }}>
            {icon}
          </div>
        )}
        <div
          className={`buttonContent ${size === "large" && "-large"}`}
          style={size === "large" ? { transform: "skew(33deg)" } : {}}
        >
          {content}
        </div>
      </button>
      {effect && (
        <div className="buttonContainerEffectWrapper">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            type={type}
            onClick={() => (onClick && onClick()) || undefined}
            className={`buttonContainerEffect action-icon text-small-700
            ${hover && styles.buttonContainerEffecthover}
            ${active && styles.buttonContainerEffectActive}
             button${size || ""} ${className || ""}`}
            style={{ padding: "16px 125px", transform: "skew(-33deg)" }}
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
    </>
  );
};
