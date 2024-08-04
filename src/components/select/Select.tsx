"use client";

import { ChangeEvent, useState } from "react";

export default function Select({
  label,
  options,
  value,
  handleChange,
}: {
  label: string;
  options: string[];
  value: string;
  handleChange?: (event: ChangeEvent<HTMLSelectElement>) => {};
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="cars" className="text-white text-sm">
        {label}
      </label>
      <select
        value={value}
        onChange={handleChange}
        name="cars"
        id="cars"
        className="w-full border border-pactto-gray border-solid bg-default-black text-white hover:border-white h-14 p-3"
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
