import OnboardingList from "@/components/list/onboardginToDo/OnboardingList";
import Search from "@/components/search/input/Search";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["500", "700"],
  subsets: ["latin"],
});

// const museoSlab = Museo_Slab({
//   weight: '700',
//   subsets: ['latin'],
//   variable: '--font-museo'
// });

const listItems = [
  { text: "Open your inbox and verify your email", done: true, id: "1" },
  { text: "Check the short video of Pactto in action", done: true, id: "2" },
  {
    text: "Wanna record your computer screen or review files? Download Pactto for Mac or Windows",
    done: false,
    id: "3",
  },
  {
    text: "Wanna review videos, images or audio files with your phone or tablet? Download Pactto for iOS or Android",
    done: false,
    id: "4",
  },
];

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <Search />
      <OnboardingList listItems={listItems} />
    </main>
  );
}
