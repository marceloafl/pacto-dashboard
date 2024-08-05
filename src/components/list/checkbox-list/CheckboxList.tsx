import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function CheckboxList({
  items,
  showTextField = false,
}: {
  items: string[];
  showTextField?: boolean;
}) {
  return (
    <FormGroup className="flex flex-col text-pactto-gray">
      {items?.map((item) => (
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon className="text-pactto-gray" />}
              checkedIcon={<CheckBoxIcon className="text-accent" />}
            />
          }
          key={item}
          id={item}
          aria-label={item}
          label={item}
        />
      ))}
      {showTextField && (
        <TextField
          id="outlined-basic"
          placeholder="Other"
          variant="outlined"
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
                borderColor: "var(--pactto-gray)",
              },
            },
            "& .MuiInputBase-input": {
              color: "var(--pactto-gray)",
            },
          }}
        />
      )}
    </FormGroup>
  );
}
