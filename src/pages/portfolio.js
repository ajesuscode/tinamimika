import Image from "next/image";
import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import { search, mapImageResource } from "@/lib/cloudinary";

export default function Portfolio({ images }) {
    const [modalImage, setModalImage] = useState(null);
    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 bg-zinc-950">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="col-span-1 border-r border-b h-84 border-zinc-800/50 relative hover:shadow-lg hover:shadow-zinc-900 cursor-pointer"
                        onClick={() => openModal(image)}
                    >
                        <div className="m-4">
                            <CldImage
                                width="800"
                                height="800"
                                src={image.title}
                                sizes="100vw"
                                alt={image.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {modalImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-stone-950 bg-opacity-95 lg:flex lg:flex-row flex flex-col items-center justify-center cursor-pointer pt-24 px-4 lg:pt-4"
                    onClick={closeModal}
                >
                    <div className="hidden lg:mr-8 w-20"></div>
                    <div
                        className="max-w-screen-lg max-h-screen-80 cursor-default flex flex-col items-center relative"
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                    >
                        <button
                            className="absolute top-2 right-2 p-2 rounded-md text-zinc-100 hover:bg-opacity-50 md:flex"
                            onClick={closeModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <CldImage
                            src={modalImage.image}
                            alt="modal-image"
                            className="w-[64rem] object-contain"
                            width="1920"
                            height="1920"
                            sizes="100vw"
                        />
                    </div>
                    {/* <div className="pt-12 lg:ml-8 lg:self-end lg:pb-28 font-display tracking-widest text-xs font-light text-zinc-200 lg:text-sm">
                        <p className="text-base">{modalImage.title}</p>
                        <p>Pays Basque, 2023</p>
                    </div> */}
                </div>
            )}
        </>
    );
}

export async function getStaticProps() {
    const results = await search();
    console.log("results", results);
    const { resources } = results;
    const images = mapImageResource(resources);
    return {
        props: {
            images,
        },
    };
}
