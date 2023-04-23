import Image from "next/image";
import { useState } from "react";
import pic1 from "../assets/pic1.jpeg";
export default function Portfolio() {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const images = [
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
        pic1,
    ];

    return (
        <>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 bg-zinc-950">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="col-span-1 border-r border-b h-84 border-zinc-800/50 relative hover:shadow-lg hover:shadow-zinc-900 cursor-pointer"
                        onClick={() => openModal(image)}
                    >
                        <div className="m-4">
                            <Image
                                src={image}
                                alt={`pic-${index + 1}`}
                                className=""
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
                        <Image
                            src={modalImage}
                            alt="modal-image"
                            className="w-[46rem] object-contain"
                        />
                    </div>
                    <div className="pt-12 lg:ml-8 lg:self-end lg:pb-28 font-display tracking-widest text-xs font-light text-zinc-200 lg:text-sm">
                        <p className="text-base">Atlantic Sunset</p>
                        <p>Pays Basque, 2023</p>
                    </div>
                </div>
            )}
        </>
    );
}
