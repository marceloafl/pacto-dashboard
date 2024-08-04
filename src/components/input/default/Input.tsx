import { TextField } from "@mui/material/";
import { ChangeEvent } from "react";

interface IInputProps {
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  id: string;
  label?: string;
  customClassname?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function Input({
  placeholder,
  type = "text",
  id,
  label,
  customClassname,
  onChange,
}: IInputProps) {
  return (
    <div className={customClassname}>
      <label htmlFor={id}>{label}</label>
      <TextField
        onChange={onChange}
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
        variant="outlined"
        className="bg-gray-500 w-full"
        sx={{
          "& .MuiInputBase-input": {
            color: "white",
            "::placeholder": {
              color: "text-pactto-gray",
              fontWeight: 500,
            },
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
    </div>
  );
}
