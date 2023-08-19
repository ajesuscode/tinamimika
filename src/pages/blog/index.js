import { getBlogPosts } from "@/utils/getPosts";
import { mapPosts } from "@/utils/getPosts";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }) {
    return (
        <div className=" xl:p-4 bg-zinc-950 h-screen py-12 lg:text-2xl overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {posts.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                        <div
                            key={post.id}
                            className="w-screen  lg:p-8 flex flex-col justify-center relative"
                        >
                            <div className="flex justify-center relative w-full overflow-hidden mb-6 md:block">
                                <Image
                                    src={`${[post.image]}`}
                                    width={390}
                                    height={498}
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
    const data = await getBlogPosts();
    let posts = await mapPosts(data);
    return {
        props: {
            posts,
        },
    };
}
