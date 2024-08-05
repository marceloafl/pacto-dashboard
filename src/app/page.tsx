"use client";

import OnboardingList, {
  IListItem,
} from "@/components/list/onboardingToDo/OnboardingList";
import Search from "@/components/input/search/Search";
import { Montserrat } from "next/font/google";
import AddIcon from "@mui/icons-material/Add";
import Button from "@/components/button/Button";
import { ChangeEvent } from "react";
import { useAside } from "@/context/MenuContext";
import PageTitle from "@/components/page-title/PageTitle";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import MenuIcon from "@mui/icons-material/Menu";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";

const montserrat = Montserrat({
  weight: ["500", "700"],
  subsets: ["latin"],
});

// const museoSlab = Museo_Slab({
//   weight: '700',
//   subsets: ['latin'],
//   variable: '--font-museo'
// });

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

  const onChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    {
      console.log("On Change");
    }
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
            <PageTitle>Select a video</PageTitle>
          </div>
          <div className="w-full flex gap-4 justify-end">
            <Button theme="primary" startIcon={<AddIcon />}>
              My uploads
            </Button>
          </div>
        </div>
        <Search />
      </section>
    </PageWrapper>
  );
}
