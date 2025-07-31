// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getBlogFromDB } from "@/lib/database/blog";
import { Blog } from "@/types/types";

type IBlog = {
    message?: string;
    blog?: Blog[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IBlog>
) {
    const blog = getBlogFromDB();
    if (blog) {
        res.status(200).json({ blog });
    } else {
        res.status(404).json({ message: "Không tìm thấy tin tức" });
    }
}
