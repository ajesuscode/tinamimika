import Image from "next/image";
import Link from "next/link";
import pic1 from "../assets/pic1.jpeg";
import { ExteriorIcon, OceanIcon } from "@/components/icons/icons";
import { InteriorIcon } from "@/components/icons/icons";
import { PaysageIcon } from "@/components/icons/icons";
import { PeopleIcon } from "@/components/icons/icons";

export default function Home() {
    return (
        <>
            <main
                className={`py-20 px-2 bg-zinc-950 lg:flex lg:pt-2 md:py-16  lg:flex-row`}
            >
                <div className="hidden mx-auto lg:flex lg:flex-col lg:justify-center lg:gap-48">
                    <div className="relative hover:scale-105 group/icon">
                        <Link href="/portfolio#exterior">
                            <ExteriorIcon />
                            <div className="absolute top-0 left-full w-72 mt-2 tracking-widest text-zinc-500 px-4 rounded-md text-sm invisible group-hover/icon:visible font-display">
                                Exterior
                            </div>
                        </Link>
                    </div>
                    <div className="relative hover:scale-105 group/icon">
                        <Link href="/portfolio#interior">
                            <InteriorIcon />
                            <div className="absolute top-0 left-full w-72 mt-2 tracking-widest text-zinc-500 px-4 rounded-md text-sm invisible group-hover/icon:visible font-display">
                                Interior
                            </div>
                        </Link>
                    </div>
                </div>
                <section className="mx-auto flex items-center justify-center md:max-w-md lg:max-w-5xl ">
                    <Image src={pic1} alt="main pic" className="w-[54rem] " />
                </section>
                <div className="hidden mx-auto lg:flex lg:flex-col lg:justify-center lg:gap-48 ">
                    <div className="relative hover:scale-105 group/icon">
                        <Link href="/portfolio#paysage">
                            <PaysageIcon />
                            <div className="absolute top-0 right-full w-24 mt-2 tracking-widest text-zinc-500 px-4 rounded-md text-sm invisible group-hover/icon:visible font-display">
                                Paysage
                            </div>
                        </Link>
                    </div>
                    <div className="relative hover:scale-105 group/icon">
                        <Link href="/portfolio#life">
                            <OceanIcon />
                            <div className="absolute top-0 right-full w-24 mt-2 tracking-widest text-zinc-500 px-4 rounded-md text-sm invisible group-hover/icon:visible font-display">
                                Yachts
                            </div>
                        </Link>
                    </div>
                </div>
                {/* small screen devices */}
                <div className="lg:hidden flex flex-row justify-between gap-2 px-4 pt-12 ">
                    <div className="flex flex-col items-center">
                        <Link href="/portfolio#exterior">
                            <ExteriorIcon />
                            <span className="text-xs font-display text-zinc-600 tracking-widest pt-4">
                                Exterior
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/portfolio#paysage">
                            <PaysageIcon />
                            <span className="text-xs font-display text-zinc-600 tracking-widest pt-4">
                                Paysage
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/portfolio#interior">
                            <InteriorIcon />
                            <span className="text-xs font-display text-zinc-600 tracking-widest pt-4">
                                Interior
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href="/portfolio#life">
                            <OceanIcon />
                            <span className="text-xs font-display text-zinc-600 tracking-widest pt-4">
                                Yachts
                            </span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
