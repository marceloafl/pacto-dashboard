import MenuIcon from "@mui/icons-material/Menu";

export default function OpenAsideButton({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <button className="text-white text-start" onClick={handleClick}>
      <MenuIcon />
    </button>
  );
}
