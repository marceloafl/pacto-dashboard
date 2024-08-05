import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";

export default function Search({
  helperText,
  handleChange,
}: {
  helperText?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      {helperText && <p className="text-white m-auto">{helperText}</p>}
      <TextField
        onChange={handleChange}
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton className="text-pactto-gray">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        className="w-full"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderWidth: "1px",
            color: "var(--pactto-gray)",
            "& fieldset": {
              borderColor: "var(--pactto-gray)",
            },
            "&:hover fieldset": {
              borderColor: "#ffffff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--pactto-green)",
            },
          },
          "& .MuiInputBase-input": {
            color: "var(--pactto-gray)",
          },
        }}
      />
    </>
  );
}
