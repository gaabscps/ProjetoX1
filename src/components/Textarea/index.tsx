import React, { useEffect, useState } from 'react';

interface TextareaProps {
    maxHeight?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    label?: string;
    placeholder?: string;
    className?: string;
    name?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    required?: boolean;
    marginBottom?: string;
    maxLength?: number;
    maxCharacters?: number;
}

export default function Textarea({
    maxHeight,
    value,
    onChange,
    label,
    placeholder,
    className,
    name,
    style,
    disabled,
    required,
    marginBottom = '20px',
    maxLength,
    maxCharacters,
}: TextareaProps) {
    const [characterCount, setCharacterCount] = useState(0);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const inputText = event.currentTarget.value;

        // Truncate input if it exceeds the maximum limit
        if (maxCharacters && inputText.length >= maxCharacters) {
            event.preventDefault();
            return;
        }

        setCharacterCount(inputText.length + 1);
    };

    useEffect(() => {
        if (value) {
            setCharacterCount(value.length);
        }
        else {
            setCharacterCount(0);
        }
    }, [value]);

    return (
        <>
            <div
                className="d-flex flex-column input-container mb-1"
            >
                {label && <label htmlFor={name}>{label}</label>}
                <textarea
                    value={value}
                    placeholder={placeholder}
                    className={`${className}  ${disabled ? 'disabled' : ''} input textarea`}
                    id={name}
                    name={name}
                    style={{ ...style, maxHeight: maxHeight }}
                    disabled={disabled}
                    required={required}
                    maxLength={maxLength}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => {
                        onChange(e)
                    }
                    }
                />
            </div>
            <div
                style={{ marginBottom: marginBottom }}
                className="d-flex justify-content-end">
                <p>
                    {characterCount}/{maxCharacters}
                </p>
            </div>
        </>
    );
}
