import React, { ChangeEvent } from "react";

interface InputFieldProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="h-[50px] w-full rounded-3xl border-[#767676] border-[1px]">
      <input
        type="text"
        name={name}
        className="w-full h-full rounded-3xl placeholder:text-gray-500 outline-none px-5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
