"use client";

import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { useState } from "react";

export default function AddableList({
  initialItems,
  placeholder,
  tooltipImage,
}: {
  initialItems?: string[];
  placeholder?: string;
  tooltipImage?: string;
}) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleBlur = () => {
    handleAddItem();
  };

  return (
    <div className="bg-gray-500">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center border border-default-black border-solid p-3"
          >
            <span className="text-pactto-gray">{item}</span>
            <button
              onClick={() => handleRemoveItem(index)}
              style={{
                marginLeft: "auto",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <CloseIcon className="text-pactto-gray cursor-pointer" />
            </button>
          </li>
        ))}
      </ul>
      <div className="hover:bg-[#8B8C8D] flex border border-default-black border-solid p-3">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="bg-transparent grow placeholder:text-pactto-gray"
        />
        <Tooltip
          title={
            <Image
              src={tooltipImage}
              alt="Tooltip Image"
              width={288}
              height={480}
            />
          }
        >
          <InfoIcon className="text-pactto-gray cursor-pointer" />
        </Tooltip>
      </div>
    </div>
  );
}
