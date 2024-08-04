export default function BoardTitle({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-solid border-accent flex justify-center p-1 text-white text-sm">
      <h2>{title}</h2>
    </div>
  );
}
