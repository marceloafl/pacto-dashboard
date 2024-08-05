"use client";

import { useAside } from "@/context/MenuContext";
import PageWrapper from "@/components/page-wrapper/PageWrapper";
import PageTitle from "@/components/page-title/PageTitle";
import Button from "@/components/button/Button";
import CheckboxList from "@/components/list/checkbox-list/CheckboxList";
import Slider from "@/components/slider/Slider";
import ColorPicker from "@/components/color-picker/ColorPicker";
import Select from "@/components/select/Select";
import OpenAsideButton from "@/components/open-aside-button/OpenAsideButton";

export default function Settings() {
  const { isAsideVisible, toggleAside } = useAside();
  return (
    <PageWrapper>
      {!isAsideVisible && <OpenAsideButton handleClick={toggleAside} />}
      <div className="flex items-center">
        <div className="w-full flex justify-between ">
          <PageTitle>Review Settings</PageTitle>
        </div>
        <div className="w-full flex gap-4 justify-end">
          <Button theme="gray">Reset changes</Button>
          <Button theme="gray">Save changes</Button>
        </div>
      </div>
      <CheckboxList
        items={[
          "Show logo",
          "Start with microphone enabled",
          "Start with camera enabled",
          "Videos loaded start muted",
          "Notes disappear after 1 second",
          "Trackpad: pinch to zoom",
          "Trackpad: reposition with 2-finger swipe",
        ]}
      />
      <Slider label="Brush size for tools" />
      <section className="flex flex-col gap-4">
        <p className="text-white">Note color options</p>
        <div className="flex gap-4">
          <ColorPicker initialColor="#008000" label="Color 1" />
          <ColorPicker initialColor="#FF0000" label="Color 2" />
          <ColorPicker initialColor="#FFFFFF" label="Color 3" />
          <ColorPicker initialColor="#000000" label="Color 4" />
        </div>
      </section>
      <section>
        <div className="flex gap-4 w-fit">
          <Select
            label="Camera"
            options={["Default", "Option 2", "Option 3"]}
            value="Default"
          />
          <Select
            label="Microphone"
            options={["Default", "Option 2", "Option 3"]}
            value="Default"
          />
          <Select
            label="Speakers"
            options={["Default", "Option 2", "Option 3"]}
            value="Default"
          />
        </div>
      </section>
    </PageWrapper>
  );
}
