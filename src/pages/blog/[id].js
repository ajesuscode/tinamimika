import { getSinglePost, getPostsIds } from "@/utils/getPosts";
import Image from "next/image";
import { ArticleJsonLd } from "next-seo";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function renderNode(node) {
    switch (node.nodeType) {
        case "paragraph":
            return (
                <p className="font-body text-lg font-light">
                    {node.content[0].value}
                </p>
            );
        case "heading-1":
            return (
                <h6 className="text-xl font-body font-bold">
                    {node.content[0].value}
                </h6>
            );
        case "ordered-list":
            return (
                <ol className="font-body">
                    {node.content.map((item, index) => (
                        <li key={index}>{item.content[0].value}</li>
                    ))}
                </ol>
            );
        // Add more cases as needed for other nodeTypes
        default:
            return null;
    }
}

export default function Page({ post }) {
    return (
        <>
            <article className="md:p-20 lg:p-12 bg-zinc-950 py-12 lg:text-2xl overflow-y-auto gap-4 ">
                <div className="flex flex-col justify-center items-center w-full lg:w-auto text-center">
                    <h1 className="font-display text-2xl lg:text-4xl pb-2">
                        {post.title}
                    </h1>
                    <p className="text-xs font-display tracking-widest  text-zinc-500 pb-1">
                        {post.location}
                    </p>
                    <p className="text-xs font-display tracking-widest text-zinc-500 pb-8">
                        {post.date}
                    </p>

                    {post.img &&
                        post.content &&
                        post.img.map((img, index) => (
                            <div
                                key={img.public_id}
                                className="flex flex-col justify-center items-center w-full mb-4"
                            >
                                <Image
                                    src={img.original_secure_url}
                                    alt={img.public_id}
                                    width={550}
                                    quality={100}
                                    height={600}
                                    className="max-w-full mb-2"
                                />
                                {post.content[index] && (
                                    <div className="font-body overflow-y-auto break-words max-w-full p-4 w-[600px] mb-8 whitespace-normal text-start">
                                        {renderNode(post.content[index])}
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            </article>
            <ArticleJsonLd
                type="BlogPosting"
                url={`https://wwww.tinamimika.fr/blog/${post.id}`}
                title={post.title}
                images={post.img.map((i) => i.original_secure_url)}
                datePublished={post.date}
                dateModified={post.date}
                authorName="Tina Mimika"
                description="This is a mighty good description of this blog."
            />
        </>
    );
}

export async function getServerSideProps(context) {
    const postData = await getSinglePost(context.params.id);
    const isoDate = postData.fields.date;
    const date = new Date(isoDate);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const friendlyDate = `${date.getDate()} ${
        monthNames[date.getMonth()]
    } ${date.getFullYear()}`;
    const post = {
        id: postData.sys.id,
        date: friendlyDate || null,
        title: postData.fields.title,
        content: postData.fields.content.content,
        img: postData.fields.cloud,
        location: postData.fields.location,
    };

    return {
        props: {
            post,
        },
    };
}
