// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { search } from "@/lib/cloudinary";
export default async function handler(req, res) {
    const results = await search();
    res.status(200).json({ ...results });
}
