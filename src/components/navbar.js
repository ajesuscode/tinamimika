import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <header className="p-2 border-b border-zinc-800 top-0 shadow sticky bg-zinc-950 z-20">
            <div class="mx-auto max-w-screen-xl">
                <div class="flex flex-row items-center justify-between gap-4 lg:gap-10">
                    <div class="hidden flex-1 items-center justify-start gap-4 sm:flex">
                        <nav
                            aria-label="Site Nav"
                            class="hidden gap-8 text-sm font-display tracking-widest md:flex md:px-4"
                        >
                            <Link class="text-zinc-200" href="/portfolio">
                                Portfolio
                            </Link>
                        </nav>
                    </div>
                    <div class="md:hidden lg:hidden px-2">
                        <div>
                            <Link href="/portfolio">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-zinc-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div class="md:hidden lg:hidden px-2">
                        <div>
                            <Link href="/blog">
                                <svg
                                    width="512"
                                    height="512"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke-width="1"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-zinc-400"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm3.465-4a4.002 4.002 0 0 0-7.339 1H2a1 1 0 1 0 0 2h1.126A4.002 4.002 0 0 0 11 12h2a4 4 0 0 0 7.874 1H22a1 1 0 1 0 0-2h-1.126a4.002 4.002 0 0 0-7.339-1h-3.07ZM15 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <Link href="/">
                        <Image
                            src="/mimika.svg"
                            alt="Tina Mimika logo"
                            width={150}
                            height={120}
                            className="shadow-md shadow-zinc-900 rounded-2xl"
                        />
                    </Link>

                    <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
                        <nav
                            aria-label="Site Nav"
                            class="hidden gap-8 text-sm font-display tracking-widest md:flex md:px-4"
                        >
                            <Link
                                className="py-2 text-sm font-display tracking-widest text-zinc-200 md:px-4"
                                href="/about"
                            >
                                About
                            </Link>
                            <Link
                                className="py-2 text-sm font-display tracking-widest text-zinc-200 md:px-4"
                                href="/blog"
                            >
                                Blog
                            </Link>
                        </nav>
                    </div>
                    <div class="md:hidden lg:hidden px-2 ">
                        <div>
                            <a
                                rel="noopener noreferrer"
                                href="mailto:tinamimika.ocean@gmail.com"
                                title="Email"
                            >
                                <svg
                                    width="512"
                                    height="512"
                                    viewBox="0 0 36 36"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-zinc-400"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                                        class="clr-i-outline clr-i-outline-path-1"
                                    />
                                    <path fill="none" d="M0 0h36v36H0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="md:hidden lg:hidden px-2  ">
                        <div>
                            <Link href="/about">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-zinc-400"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
