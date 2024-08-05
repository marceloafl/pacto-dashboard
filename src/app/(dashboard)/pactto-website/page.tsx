"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import Button from "@/components/button/Button";
import Input from "@/components/input/default/Input";
import TextArea from "@/components/input/text-area/TextArea";
import AddableList from "@/components/input/addable-list/AddableList";
import Avatar from "@/components/avatar/AvatarWrapper";
import AddIcon from "@mui/icons-material/Add";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";

export default function PacttoWebsite() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <div className="flex items-center">
        <div className="w-full flex justify-between ">
          <p className="text-white text-xl">
            Please edit your Pactto page below.
          </p>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <Button theme="blue">Launch</Button>
          <Button theme="primary">Save</Button>
        </div>
      </div>
      <div className="flex gap-8 text-white">
        <section className="w-full flex flex-col gap-8">
          <div>
            <Input id="package-website-hero-input" label="Hero" />
            <Input id="package-website-headline-input" />
          </div>
          <div className="flex flex-col gap-8">
            <TextArea placeholder="About me" label="About me" />
            <div className="flex flex-col gap-6">
              <Input
                id="about-expertise-title-input"
                placeholder="Expertise Title"
              />
              <AddableList
                initialItems={["Expertise 1"]}
                placeholder="Add expertise"
              />
            </div>
            <div className="flex flex-col gap-6">
              <Input id="about-award-title-input" placeholder="Awards Title" />
              <AddableList initialItems={["Award 1"]} placeholder="Add award" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-white">Give me a follow</p>
              <AddableList
                initialItems={["www.pactto.com"]}
                placeholder="Add social media channel"
              />
            </div>
            <div className="flex flex-col gap-6">
              <Input
                id="about-youtube-video-input"
                placeholder="YouTube video URL"
                label="YouTube video"
              />
            </div>
            <div className="flex flex-col gap-6">
              <TextArea placeholder="Quote" label="Footer" />
              <Input id="about-quote-author-input" placeholder="Quote Author" />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col gap-8">
          <div>
            <p className="text-white mb-2">Avatar</p>
            <Avatar />
          </div>
          <div>
            <p className="text-white mb-2">Carousel</p>
            <div className="w-fit">
              <Button theme="primary" startIcon={<AddIcon />}>
                Add image
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
