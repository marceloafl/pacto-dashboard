"use client";

import { MuiColorInput } from "mui-color-input";
import { useState } from "react";

export default function ColorPicker({
  initialColor,
  label,
}: {
  initialColor: string;
  label: string;
}) {
  const [value, setValue] = useState(initialColor);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="relative">
      <label className="absolute px-1 text-xs text-white bg-default-black z-10 translate-x-2 -translate-y-2">
        {label}
      </label>
      <MuiColorInput
        format="hex"
        value={value}
        onChange={handleChange}
        className="w-32 text-white"
        sx={{
          "& .MuiInputBase-root": {
            color: "white",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "var(--pactto-gray)",
            },
            "&:hover fieldset": {
              borderColor: "#FFFFFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FFFFFF",
            },
          },
        }}
      />
    </div>
  );
}
