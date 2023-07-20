'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles/styles.module.scss';
import { useMediaQuery } from 'react-responsive';

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode | string;
  size?: 'large' | 'standard' | 'small';
  theme?: 'standard' | 'primary' | 'primaryOutline' | 'outline' | 'secondary' | 'selected';
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  height?: string;
  margin?: string;
  effect?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  effect,
  content,
  icon,
  theme = 'standard',
  size,
  type,
  className,
  width,
  height,
  margin,
  disabled,
  onClick,
}) => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const mobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  // funções para lidar com estado hover/ativo do efeito do botão com efeito, acompanhando o estado do botão
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

  const styleValidation = () => {
    const style = {
      padding: '',
      transform: '',
      width: '',
      height: '',
      margin: '',
    };

    if (size === 'large') {
      style.padding = isMobile ? '16px' : '16px 125px';
      style.transform = 'skew(-33deg)';
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
        disabled={disabled || false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        type={type}
        onClick={() => (onClick && onClick()) || undefined}
        className={`buttonContainer text-small-700 ${theme === 'standard' && hover ? styles.buttonContainerHover : ''
          } ${theme === 'standard' && active ? styles.buttonContainerActive : ''} button-size-${size || ''
          } button-${theme || 'theme'} ${className || ''}  `}
        style={styleValidation()}
      >
        {icon && <div className="buttonIcon">{icon}</div>}
        <div className={`buttonContent ${size ? size : ''}`}>{content}</div>
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
             button${size || ''} ${className || ''}`}
            style={{
              padding: isMobile ? '16px' : '16px 125px',
              transform: 'skew(-33deg)',
            }}
          >
            {icon && (
              <div className="buttonIcon" style={{ color: 'black' }}>
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
