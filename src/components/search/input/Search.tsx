import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <TextField
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
  );
}
