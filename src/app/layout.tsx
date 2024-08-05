"use client";

import AsideSection from "@/components/aside/aside-section/AsideSection";
import { AsideProvider } from "@/context/MenuContext";
import "@/styles/globals.css";

// export const metadata = {
//   title: "Pactto",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className=" bg-default-black h-full">
        <AsideProvider>
          <main className="flex h-full">
            <AsideSection />
            <section className="flex-1 p-4 transition-all duration-300">
              {children}
            </section>
          </main>
        </AsideProvider>
      </body>
    </html>
  );
}
