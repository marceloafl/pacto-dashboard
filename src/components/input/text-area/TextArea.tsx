import TextareaAutosize from "@mui/material/TextareaAutosize";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { ChangeEvent } from "react";

interface TextAreaProps {
  tooltip?: string;
  tooltipAltText?: string;
  placeholder?: string;
  label?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function TextArea({
  tooltip,
  tooltipAltText,
  placeholder,
  label,
  onChange,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <p>{label}</p>
      <div className="bg-gray-500 w-full h-36 p-3 flex">
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder={placeholder}
          className="bg-gray-500 w-full h-full"
          onChange={onChange}
        />
        {tooltip && (
          <Tooltip
            title={
              <Image
                src={tooltip}
                alt={tooltipAltText}
                width={288}
                height={480}
              />
            }
          >
            <InfoIcon className="text-pactto-gray cursor-pointer" />
          </Tooltip>
        )}
      </div>
    </div>
  );
}
