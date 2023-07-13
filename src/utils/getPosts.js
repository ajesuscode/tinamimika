import { createClient } from "contentful";

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
    const response = await client.getEntries({
        content_type: "blogPost",
    });

    return response.items;
};

export function mapPosts(data) {
    return data.map((post) => {
        console.log("POST", post);
        return {
            id: post.sys.id,
            title: post.fields.title,
            image: post.fields.image,
            content: post.fields.content.content[0].content[0].value,
        };
    });
}

export default getBlogPosts;
