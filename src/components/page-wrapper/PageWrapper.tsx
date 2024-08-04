import { Montserrat } from "next/font/google";
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

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAsideVisible } = useAside();
  return (
    <section
      className={`flex flex-col gap-4 p-8 ${montserrat.className} ${isAsideVisible ? "ml-64" : "w-full"}`}
    >
      {children}
    </section>
  );
}
