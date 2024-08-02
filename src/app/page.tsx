import Button from "@/components/button/Button";
import OnboardingList, {
  IListItem,
} from "@/components/list/onboardingToDo/OnboardingList";
import Search from "@/components/search/input/Search";
import { Montserrat } from "next/font/google";
import AddIcon from "@mui/icons-material/Add";
import Input from "@/components/input/default/Input";
import CountryInput from "@/components/input/country/CountryInput";
import CheckboxList from "@/components/list/checkbox-list/CheckboxList";

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
    </main>
  );
}
