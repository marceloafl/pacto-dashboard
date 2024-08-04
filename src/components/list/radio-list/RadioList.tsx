import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent } from "react";

interface IRadioListProps {
  label?: string;
  id?: string;
  items: string[];
  orientation?: "vertical" | "horizontal";
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function RadioList({
  label,
  id,
  items,
  orientation = "vertical",
  onChange,
}: IRadioListProps) {
  return (
    <FormControl className="text-pactto-gray">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <RadioGroup
        className={`flex ${orientation === "horizontal" ? "flex-row" : "flex-col"}`}
        id={`radio-${id}`}
        onChange={onChange}
      >
        {items?.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                className="text-pactto-gray"
                disableRipple
                checkedIcon={<RadioButtonCheckedIcon />}
                icon={<RadioButtonUncheckedIcon />}
              />
            }
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
