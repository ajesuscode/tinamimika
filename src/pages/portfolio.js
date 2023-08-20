import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { CldImage } from "next-cloudinary";
import { search, mapImageResource } from "@/lib/cloudinary";

export default function Portfolio({ images }) {
    const [isMobile, setIsMobile] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(null);
    useEffect(() => {
        // Set isMobile to true if the screen width is less than or equal to 768px
        setIsMobile(window.innerWidth <= 768);
    }, []);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImageIndex(null);
    };

    // Group images by folder
    const imagesByFolder = images.reduce((groups, image) => {
        const group = groups[image.folder] || [];
        group.push(image);
        groups[image.folder] = group;
        return groups;
    }, {});

    const asArray = Object.entries(imagesByFolder);
    const folderOrder = {
        exterior: 1,
        interior: 2,
        life: 3,
        paysage: 4,
    };
    const allowedKeys = ["exterior", "interior", "life", "paysage"];
    let filtered = asArray.filter(([key, value]) => allowedKeys.includes(key));

    filtered = filtered.sort((a, b) => {
        return folderOrder[a[0]] - folderOrder[b[0]];
    });

    let portfolioImages = Object.fromEntries(filtered);

    const flattenedImages = [].concat(...Object.values(portfolioImages));

    const goToNextImage = () => {
        setModalImageIndex((prevIndex) =>
            prevIndex === flattenedImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousImage = () => {
        setModalImageIndex((prevIndex) =>
            prevIndex === 0 ? flattenedImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            {Object.entries(portfolioImages).map(([folder, img]) => (
                <div key={folder} id={folder} className="bg-zinc-950">
                    <div className="flex flex-row justify-center gap-4 py-6 pl-4 items-center">
                        <h2 className="font-display tracking-widest text-xs ">
                            {folder}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 bg-zinc-950">
                        {img.map((image) => (
                            <div
                                key={image.id}
                                className="col-span-1 border-r border-b  border-t h-84 border-zinc-800/50 relative hover:shadow-lg hover:shadow-zinc-900 cursor-pointer"
                                onClick={() => {
                                    // Only allow click action if not on mobile
                                    if (!isMobile) {
                                        setModalImageIndex(
                                            flattenedImages.indexOf(image)
                                        );
                                    }
                                }}
                            >
                                <div className="m-4 ">
                                    <CldImage
                                        width="800"
                                        height="600"
                                        src={image.title}
                                        sizes="75vw"
                                        alt={image.title}
                                        crop="limit"
                                        className="object-center"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {modalImageIndex !== null && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-stone-950  lg:flex lg:flex-row flex flex-col items-center justify-center cursor-pointer pt-24 px-4 lg:pt-4"
                    onClick={() => setModalImageIndex(null)}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPreviousImage();
                        }}
                        className="hidden md:pr-4 md:block"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className=""
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="h-[640px]"
                    >
                        <CldImage
                            src={flattenedImages[modalImageIndex].title}
                            alt="modal-image"
                            className="object-contain h-full w-full"
                            width={1920}
                            height={1080}
                            sizes="100vw"
                        />
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNextImage();
                        }}
                        className="w-24 h-24 hidden md:block md:pl-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-chevron-right"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}

export async function getServerSideProps() {
    const results = await search();

    const { resources } = results;
    const images = mapImageResource(resources);

    return {
        props: {
            images,
        },
    };
}
