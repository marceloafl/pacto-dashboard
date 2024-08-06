"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Button from "@/components/button/Button";
import AddIcon from "@mui/icons-material/Add";
import SwitchButton from "@/components/package-board/switch/Switch";
import DeletePackageButton from "@/components/package-board/delete-package/DeletePackage";
import Board from "@/components/package-board/board/Board";
import OpenAsideButton from "@/components/aside/open-aside-button/OpenAsideButton";

export default function PackagesForSale() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <div className="flex">
        <div className="w-full flex justify-between ">
          <Button theme="primary" startIcon={<AddIcon />}>
            Add package
          </Button>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <Button theme="gray">Save changes</Button>
          <Button theme="primary">Payment details</Button>
        </div>
      </div>
      <div className="flex">
        <SwitchButton label="Package is unpublished" />
        <DeletePackageButton label="Delete package" />
      </div>
      <Board />
    </PageWrapper>
  );
}
