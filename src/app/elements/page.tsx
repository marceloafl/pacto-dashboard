"use client";

import OnboardingList, {
  IListItem,
} from "@/components/list/onboardingToDo/OnboardingList";
import Search from "@/components/input/search/Search";
import { Montserrat } from "next/font/google";
import AddIcon from "@mui/icons-material/Add";
import Input from "@/components/input/default/Input";
import CountryInput from "@/components/input/country/CountryInput";
import CheckboxList from "@/components/list/checkbox-list/CheckboxList";
import TextArea from "@/components/input/text-area/TextArea";
import AddableList from "@/components/input/addable-list/AddableList";
import Avatar from "@/components/avatar/AvatarWrapper";
import ListWithIcon from "@/components/list/list-with-icon/ListWithIcon";
import Slider from "@/components/slider/Slider";
import ColorPicker from "@/components/color-picker/ColorPicker";
import Select from "@/components/select/Select";
import Button from "@/components/button/Button";
import SwitchButton from "@/components/package-board/switch/Switch";
import DeletePackageButton from "@/components/package-board/delete-package/DeletePackage";
import BoardTitle from "@/components/package-board/board-title/BoardTitle";
import Board from "@/components/package-board/board/Board";
import RadioList from "@/components/list/radio-list/RadioList";
import { ChangeEvent } from "react";
import { useAside } from "@/context/MenuContext";

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
    <section
      className={`flex flex-col gap-4 p-8 ${montserrat.className} ${isAsideVisible ? "ml-64" : "w-full"}`}
    >
      {!isAsideVisible && (
        <button
          className="top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleAside}
        >
          Abrir Aside
        </button>
      )}
      <Search />
      <Search helperText="No Pacctos found" />
      <OnboardingList listItems={listItems} />
      <div className="flex flex-col gap-4 w-96">
        <Button theme="primary" startIcon={<AddIcon />}>
          Upload new video
        </Button>
        <Button theme="gray">reset changes</Button>
        <Button theme="blue">Launch</Button>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Custom placeholder"
          type="text"
          id="text-input"
          onChange={onChange}
        />
        <Input
          placeholder="Custom placeholder"
          type="password"
          id="password-input"
          onChange={onChange}
        />
        <Input
          placeholder="Custom placeholder"
          type="email"
          id="email-input"
          onChange={onChange}
        />
        <CountryInput />
        <CountryInput error />
      </div>
      <CheckboxList
        items={[
          "Video",
          "Design",
          "Development",
          "Sports",
          "Medical",
          "Inspections",
        ]}
      />
      <TextArea
        tooltip="/tooltip-about-me.png"
        tooltipAltText="Tooltip alt text"
        onChange={onChange}
      />
      <AddableList
        initialItems={["Expertise 1"]}
        placeholder="Add expertise"
        tooltipImage="/tooltip-expertise.png"
      />
      <Avatar />
      <ListWithIcon />
      <RadioList
        onChange={onChange}
        items={["Video", "Image", "File (PDF, txt, etc)"]}
        orientation="horizontal"
      />
      <RadioList
        onChange={onChange}
        items={[
          "Single file review (e.g. video, image, or PDF)",
          "Single link review (e.g. LinkedIn URL, portfolio)",
          "Single review of multiple files (e.g. 2 videos and 1 image, reviewed together)",
        ]}
      />
      <Slider label="Brush size for tools" />
      <div className="flex gap-3">
        <ColorPicker initialColor="#FFFFFF" label="Color 1" />
        <ColorPicker initialColor="#FF0000" label="Color 2" />
      </div>
      <Select
        label="Camera"
        options={["Default", "Dell"]}
        value="Default"
        onChange={onChange}
      />
      <SwitchButton label="Package is unpublished" />
      <DeletePackageButton label="Delete package" />
      <Board />
    </section>
  );
}
