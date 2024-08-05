"use client";

import OnboardingList, {
  IListItem,
} from "@/components/list/onboardingToDo/OnboardingList";
import Search from "@/components/input/search/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "@/components/button/Button";
import { ChangeEvent, useState } from "react";
import { useAside } from "@/context/MenuContext";
import PageTitle from "@/components/page-title/PageTitle";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";
import VideoWrapper from "@/components/video-wrapper/VideoWrapper";

const listItems: IListItem[] = [
  { type: "verify-email", done: true },
  { type: "check-video", done: true },
  {
    type: "download-desktop",
    done: false,
  },
  {
    type: "download-mobile",
    done: false,
  },
];

export default function Home() {
  const { isAsideVisible, toggleAside } = useAside();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}

      <section className="flex flex-col gap-4">
        <p className="text-white text-xl">Hey Marcelo, welcome to Pactto!</p>
        <OnboardingList listItems={listItems} />
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex items-center">
          <div className="w-full flex justify-between ">
            <PageTitle>My uploads</PageTitle>
          </div>
          <div className="w-full flex gap-4 justify-end">
            <Button theme="primary" startIcon={<AddIcon />}>
              Upload new video
            </Button>
          </div>
        </div>
        <Search handleChange={handleChange} />
      </section>
      <section>
        <VideoWrapper searchTerm={searchTerm} />
      </section>
    </PageWrapper>
  );
}
