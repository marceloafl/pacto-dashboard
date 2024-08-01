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

export default function Home() {
  return (
    <main className={`${montserrat.className}`}>
      <Search />
    </main>
  );
}
