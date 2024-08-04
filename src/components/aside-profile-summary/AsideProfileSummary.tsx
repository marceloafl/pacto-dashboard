import Image from "next/image";

export default function AsideProfileSummary() {
  return (
    <div className="flex flex-col gap-8 px-8">
      <p className="text-sm text-pactto-gray uppercase mt-4">
        Your Pactto profile
      </p>
      <div className="flex items-end justify-between">
        <Image
          alt="Your profile"
          src="/avatar-placeholder.png"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-[8px] text-pactto-gray uppercase">
            Trial: 10 days left
          </p>
          <p className="text-center uppercase text-white text-xs font-medium bg-accent w-fit rounded-md p-1.5">
            Pactto Pro
          </p>
        </div>
        <a href="#" className="text-pactto-gray text-sm underline">
          Upgrade
        </a>
      </div>
      <div>
        <h3 className="text-white text-xl">Marcelo Lemes</h3>
        <p className="text-pactto-gray text-sm">Pactto member since 2024</p>
      </div>
    </div>
  );
}
