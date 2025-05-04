import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fba919] w-full h-auto flex items-end justify-center">
      <div className="linea">
        <Image
          src="/social-pulse-hero.png"
          alt="social-pulse-hero"
          width={833}
          height={541}
          className="w-[833px] h-[541px]"
        ></Image>
      </div>
    </main>
  );
}
