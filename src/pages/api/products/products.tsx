// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getProductFromDB } from "@/lib/database/product";
import { Product } from "@/types/types";

type IProduct = {
  message?: string;
  products?: Product[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>,
) {
  const products = getProductFromDB();
  if (products) {
    res.status(200).json({ products });
  } else {
    res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
}
