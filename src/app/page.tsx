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
  return (
    <main className={`flex flex-col gap-4 p-8 ${montserrat.className}`}>
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
        <Input placeholder="Custom placeholder" type="text" />
        <Input placeholder="Custom placeholder" type="password" />
        <Input placeholder="Custom placeholder" type="email" />
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
      <TextArea />
      <AddableList
        initialItems={["Expertise 1"]}
        placeholder="Add expertise"
        tooltipImage="/tooltip-expertise.png"
      />
      <Avatar />
      <ListWithIcon />
      <Slider />
      <div className="flex gap-3">
        <ColorPicker initialColor="#FFFFFF" label="Color 1" />
        <ColorPicker initialColor="#FF0000" label="Color 2" />
      </div>
      <Select label="Camera" options={["Default", "Dell"]} value="Default" />
      <SwitchButton label="Package is unpublished" />
      <DeletePackageButton label="Delete package" />
    </main>
  );
}
