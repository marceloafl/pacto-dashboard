import "@/styles/globals.css";

export const metadata = {
  title: "Pactto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-default-black-bg">{children}</body>
    </html>
  );
}
