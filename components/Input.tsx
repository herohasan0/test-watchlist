import React, { ChangeEvent, FC } from "react";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      type="text"
      onChange={onChange}
      className="rounded-lg h-[36px] pl-4 text-base outline-0 focus:outline-1 focus:outline-blue-500 border border-gray-200 bg-custom-gray-50 placeholder:text-[15px]"
      placeholder={placeholder}
    />
  );
};

export default Input;
