import { TextField } from "@mui/material/";

interface IInputProps {
  placeholder: string;
  type?: "text" | "password" | "email";
}

export default function Input({ placeholder, type = "text" }: IInputProps) {
  return (
    <TextField
      id="outlined-basic"
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
  );
}
