import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useAside } from "@/context/MenuContext";

export default function AsideLogo() {
  const { toggleAside } = useAside();

  return (
    <div className="flex items-center justify-between px-8 pt-4">
      <Image alt="Pactto" src="/pactto-logo.svg" width={144} height={44} />
      <button onClick={toggleAside}>
        <CloseIcon className="text-white cursor-pointer" />
      </button>
    </div>
  );
}
