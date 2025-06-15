import React from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';


interface InputProps {
  label: string;
  type: string;
  name: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  helperText?: string;
  error?: FieldError;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  type, 
  name,
  register,
  placeholder,
  helperText,
  error
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className="text-[#31344a] text-base text-left mb-1">{label}</label>
      <input
        id={name}
        type={type}
        {...register}
        placeholder={placeholder}
        className={`w-full px-3 py-2 rounded-[6px] border text-[#9297a2] bg-white focus:outline-none focus:border-[#034d28] focus:ring-1 focus:ring-[#034d28] ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-[#d0d1d4]'}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
      {helperText && !error && <p className="text-xs text-[#73768e] mt-1">{helperText}</p>}
    </div>
  );
};

export default Input; 