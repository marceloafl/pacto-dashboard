"use client";

import { ChangeEvent } from "react";

export default function Select({
  label,
  options,
  value,
  onChange,
  customClassname,
}: {
  label?: string;
  options: string[];
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  customClassname?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full min-w-52">
      <label htmlFor="cars" className="text-white text-sm">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        name="cars"
        id="cars"
        className={`w-full border border-pactto-gray border-solid bg-default-black text-white hover:border-white h-14 p-3 ${customClassname}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
