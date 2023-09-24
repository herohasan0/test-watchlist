import React, { ChangeEvent } from "react";

type InputType = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function Input({ value, onChange, placeholder }: InputType) {
  return (
    <input
      value={value}
      type="text"
      onChange={onChange}
      className="rounded-lg h-[36px] pl-4 text-base outline-0 focus:outline-1 focus:outline-blue-500 border border-gray-200 bg-custom-gray-50 placeholder:text-[15px]"
      placeholder={placeholder}
    />
  );
}
