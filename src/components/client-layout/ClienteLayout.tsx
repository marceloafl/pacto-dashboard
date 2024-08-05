"use client";

import AsideSection from "@/components/aside/aside-section/AsideSection";
import { AsideProvider } from "@/context/MenuContext";

export default function ClientOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AsideProvider>
      <main className="flex h-full">
        <AsideSection />
        <section className="flex-1 p-4 transition-all duration-300">
          {children}
        </section>
      </main>
    </AsideProvider>
  );
}
