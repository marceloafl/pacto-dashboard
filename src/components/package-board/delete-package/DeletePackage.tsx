import DeleteIcon from "@mui/icons-material/Delete";

export default function DeletePackageButton({ label }: { label: string }) {
  return (
    <div className="text-pactto-gray flex items-center gap-2">
      <p>{label}</p>
      <DeleteIcon className="text-pactto-gray" />
    </div>
  );
}
