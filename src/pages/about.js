import Image from "next/image";
import mimika from "@/assets/mimika.jpeg";
export default function About() {
    return (
        <section className="md:p-28 lg:py-24 px-12 bg-zinc-950 h-screen py-20 lg:text-2xl overflow-y-auto">
            <div className="flex flex-col justify-center items-center gap-4">
                {/* <div>
                    <Image src={mimika} alt="mimika" className="w-[10rem] " />
                </div> */}
                <div>
                    <p className="font-body font-normal text-zinc-200 ">
                        Bonjour, I am{" "}
                        <span className="font-display text-lg uppercase tracking-widest lg:text-3xl">
                            Tina Mimika
                        </span>
                        an interior photographer based in France.
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        The interplay of light and the beauty of life, the
                        harmony of nature and design – these are the essence of
                        my photography. With strong background as creative
                        director and degree in film studies, I bring a unique
                        blend of technical excellence and artistic vision to my
                        photography.
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        I specialize in crafting captivating photo stories of
                        interior design photography that truly resonate with the
                        client’s perspective.
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        I have created numerous architectural photos and
                        promotional videos for hotels, residences, and resorts
                        that effectively attract new visitors and capture the
                        ambiance.
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        Using my knowledge and passion for this craft, it would
                        be a pleasure to collaborate with you in Pays Basque or
                        all around the world.
                    </p>
                    <p className="font-body  font-normal text-zinc-200 pt-4">
                        Respectfully, Tina. 🌳
                    </p>
                </div>
            </div>
        </section>
    );
}
