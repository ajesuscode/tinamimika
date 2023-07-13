import getBlogPosts from "@/utils/getPosts";
import { mapPosts } from "@/utils/getPosts";
import Image from "next/image";

export default function Blog({ posts }) {
    console.log(posts);
    return (
        <div>
            <div>Blog</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="max-w-lg bg-zinc-900/50 p-4 lg:p-8 flex flex-col justify-center relative"
                    >
                        <h1 className="font-display text-3xl tracking-widest pb-4">
                            {post.title}
                        </h1>
                        <div className="relative w-full h-64 overflow-hidden ">
                            <Image
                                src={`https:${post.image[0].fields.file.url}`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill={true}
                                alt={post.image[0].fields.file.fileName}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    console.log("function call");
    const data = await getBlogPosts();
    let posts = await mapPosts(data);
    return {
        props: {
            posts,
        },
    };
}
