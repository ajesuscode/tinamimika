import { createClient } from "contentful";

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
});

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async () => {
    const response = await client.getEntries({
        content_type: "blogPost",
    });
    return response.items;
};

export const getSinglePost = async (id) => {
    const response = await client.getEntry(id);
    console.log(response);
    return response;
};

export const getPostsIds = async () => {
    const response = await client.getEntries({
        content_type: "blogPost",
    });
    const ids = response.items.map((item) => {
        return item.sys.id;
    });
    return ids;
};

export function mapPosts(data) {
    return data.map((post) => {
        const isoDate = post.fields.date;
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
        const keywords = post.fields.keyword
            .split(",")
            .map((keyword) => keyword.trim());
        console.log("POST", post);
        return {
            id: post.sys.id,
            title: post.fields.title,
            image: post.fields.cloud[0].original_secure_url,
            content: post.fields.content.content[0].content[0].value,
            date: friendlyDate,
            keywords: keywords,
        };
    });
}
