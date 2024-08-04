import TextareaAutosize from "@mui/material/TextareaAutosize";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

export default function TextArea() {
  return (
    <div className="bg-gray-500 w-full h-36 p-3 flex">
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        className="bg-gray-500 w-full h-full"
      />
      <Tooltip
        title={
          <Image
            src="/tooltip-about-me.png"
            alt="Tooltip Image"
            width={288}
            height={480}
          />
        }
      >
        <InfoIcon className="text-pactto-gray cursor-pointer" />
      </Tooltip>
    </div>
  );
}
