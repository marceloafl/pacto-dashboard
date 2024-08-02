import { MenuItem, TextField } from "@mui/material/";

// TODO Check possibility of using the api
// https://restcountries.com/v3.1/all
const countries = [
  {
    label: "United States",
    value: "United States",
  },
  {
    label: "Brazil",
    value: "Brazil",
  },
  {
    label: "United Kingdom",
    value: "United Kingdom",
  },
  {
    label: "Japan",
    value: "Japan",
  },
];

interface IInputProps {
  error?: boolean;
}

export default function CountryInput({ error = false }: IInputProps) {
  return (
    <section className="flex flex-col gap-1">
      <TextField
        select
        defaultValue="none"
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
      >
        <option value="none" disabled>
          Country
        </option>
        {countries.map((option) => (
          <option key={option.value} value={option.label}>
            {option.value}
          </option>
        ))}
      </TextField>
      {error && (
        <p className="text-pactto-red text-xs px-4">Country is required.</p>
      )}
    </section>
  );
}
