import React from "react";

interface ButtonProps {
  Text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  Text,
  onClick,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${className} ${
        disabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
      }`}>
      {Text}
    </button>
  );
}
