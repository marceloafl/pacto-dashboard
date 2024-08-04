import BoardTitle from "../board-title/BoardTitle";

export default function BoardSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-8 w-full text-white text-sm">
      {children}
    </section>
  );
}
