import { Button as MuiButton, Stack } from "@mui/material/";

export const buttonTheme = {
  primary: "bg-accent text-black",
  gray: "bg-pactto-gray text-default-black",
  blue: "bg-default-blue text-default-black",
};

interface IButtonProps {
  children?: React.ReactNode;
  theme?: keyof typeof buttonTheme;
  startIcon?: React.ReactNode;
}

export default function Button({ theme, children, startIcon }: IButtonProps) {
  return (
    <Stack direction="row" spacing={2}>
      <MuiButton
        variant="outlined"
        startIcon={startIcon}
        className={`font-semibold border-0 rounded-3xl w-full h-12 ${buttonTheme[theme]}`}
      >
        {children}
      </MuiButton>
    </Stack>
  );
}
