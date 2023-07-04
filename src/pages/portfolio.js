import Image from "next/image";
import { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import { search, mapImageResource } from "@/lib/cloudinary";
import {
    ExteriorIcon,
    InteriorIcon,
    PaysageIcon,
    OceanIcon,
} from "@/components/icons/icons";

export default function Portfolio({ images }) {
    const [modalImage, setModalImage] = useState(null);
    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    // Group images by folder
    const imagesByFolder = images.reduce((groups, image) => {
        const group = groups[image.folder] || [];
        group.push(image);
        groups[image.folder] = group;
        return groups;
    }, {});

    return (
        <>
            {Object.entries(imagesByFolder).map(([folder, images]) => (
                <div key={folder} id={folder} className="bg-zinc-950">
                    <div className="flex flex-row justify-center gap-4 py-6 pl-4 items-center">
                        <h2 className="font-display tracking-widest text-xs ">
                            {folder}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 bg-zinc-950">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="col-span-1 border-r border-b  border-t h-84 border-zinc-800/50 relative hover:shadow-lg hover:shadow-zinc-900 cursor-pointer"
                                onClick={() => openModal(image)}
                            >
                                <div className="m-4">
                                    <CldImage
                                        width="800"
                                        height="800"
                                        src={image.title}
                                        sizes="25vw"
                                        alt={image.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
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
                            src={modalImage.title}
                            alt="modal-image"
                            className="w-[64rem] object-contain"
                            width="1920"
                            height="1920"
                            sizes="75vw"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export async function getStaticProps() {
    const results = await search();
    console.log("results", results);
    const { resources } = results;
    let images = mapImageResource(resources);

    // Define the sort order for the folders
    const folderOrder = {
        exterior: 1,
        interior: 2,
        ocean: 3,
        paysage: 4,
    };

    // Sort images by folder
    images = images.sort((a, b) => {
        return folderOrder[a.folder] - folderOrder[b.folder];
    });

    return {
        props: {
            images,
        },
    };
}
