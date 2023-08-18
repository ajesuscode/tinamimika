import { getBlogPosts } from "@/utils/getPosts";
import { mapPosts } from "@/utils/getPosts";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }) {
    console.log(posts);
    return (
        <div className="md:p-20 xl:p-36 lg:p-24 bg-zinc-950 h-screen py-12 lg:text-2xl overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {posts.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                        <div
                            key={post.id}
                            className="max-w-lg  lg:p-8 flex flex-col justify-center relative"
                        >
                            <div className="relative w-full h-64 overflow-hidden mb-6">
                                <Image
                                    src={`${[post.image]}`}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    fill={true}
                                    alt={post.image}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="px-4 pb-4 flex flex-row gap-4 ">
                                {post.keywords &&
                                    post.keywords.map((keyword, index) => (
                                        <div
                                            key={index}
                                            className="underline underline-offset-8 text-yellow-500/75"
                                        >
                                            <span className="text-xs font-body text-thin uppercase text-zinc-500  ">
                                                {keyword}
                                            </span>
                                        </div>
                                    ))}
                            </div>

                            <h1 className="font-display text-3xl tracking-widest p-4">
                                {post.title}
                            </h1>

                            <p className="font-body text-xs font-thin px-4 mb-4">
                                {post.date}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    console.log("function call");
    const data = await getBlogPosts();
    let posts = await mapPosts(data);
    console.log(posts);
    return {
        props: {
            posts,
        },
    };
}
