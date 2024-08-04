"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Slider as MuiSlider } from "@mui/material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useState } from "react";

export default function Slider() {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box className="flex items-center gap-5 text-white text-sm">
      <p>Brush size for tools</p>
      <MuiSlider
        defaultValue={30}
        onChange={handleChange}
        value={value}
        aria-label="Disabled slider"
        className="text-accent w-40"
      />
    </Box>
  );
}
