import Image from "next/image";

export default function Avatar() {
  return (
    <section className="w-full bg-black flex justify-center p-3">
      <div className="relative group cursor-pointer">
        <Image
          alt="Avatar"
          src="/avatar-placeholder.png"
          width={160}
          height={160}
          className="rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xl">Change</span>
        </div>
      </div>
    </section>
  );
}
