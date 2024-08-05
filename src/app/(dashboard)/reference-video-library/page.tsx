"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import PageTitle from "@/components/page-title/PageTitle";
import Button from "@/components/button/Button";
import AddIcon from "@mui/icons-material/Add";
import Search from "@/components/input/search/Search";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";

export default function ReferenceVideoLibrary() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <div className="flex items-center">
        <div className="w-full flex justify-between ">
          <PageTitle>Select a video</PageTitle>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <Button theme="primary" startIcon={<AddIcon />}>
            Upload new video
          </Button>
        </div>
      </div>
      <p className="text-sm text-pactto-gray mt-6">
        Videos uploaded to the reference video library can be used in
        side-by-side comparisons, or can be shared with learners directly.
      </p>
      <Search />
    </PageWrapper>
  );
}
