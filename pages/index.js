import Image from "next/image";
import Link from "next/link";
import Logo from "../component/Logo/Logo";
import HeroImage from "../public/hero.webp";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          maxime ea quis, fugiat cupiditate hic sint nisi eos delectus neque
          nostrum. Laboriosam odio at est veniam commodi sed quasi placeat odit.
        </p>
        <Link href="/post/new" className="btn ">
          Begin
        </Link>
      </div>
    </div>
  );
}
