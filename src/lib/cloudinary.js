export async function search() {
    const results = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search`,
        {
            headers: {
                Authorization: `Basic ${Buffer.from(
                    process.env.CLOUDINARY_API_KEY +
                        ":" +
                        process.env.CLOUDINARY_API_SECRET
                ).toString("base64")}`,
            },
        }
    ).then((r) => r.json());
    return results;
}

export function mapImageResource(resources) {
    return resources.map((res) => {
        const { width, height, folder } = res;
        return {
            id: res.asset_id,
            title: res.public_id,
            image: res.secure_url,
            width,
            height,
            folder,
        };
    });
}
