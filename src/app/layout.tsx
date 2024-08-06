import ClientOnlyLayout from "@/components/client-layout/ClientLayout";
import "@/styles/globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "Pactto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className=" bg-default-black h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <ClientOnlyLayout>{children}</ClientOnlyLayout>
        </Suspense>
      </body>
    </html>
  );
}
