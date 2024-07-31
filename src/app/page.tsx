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
      <p className="font-normal text-pactto-charcoal">Initial configs</p>
    </main>
  );
}
