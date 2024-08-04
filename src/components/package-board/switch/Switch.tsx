import Switch from "@mui/material/Switch";

export default function SwitchButton({ label }: { label: string }) {
  return (
    <div className="text-pactto-gray flex items-center">
      <p>{label}</p>
      <Switch defaultChecked color="default" />
    </div>
  );
}
