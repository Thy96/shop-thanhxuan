// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getProductDetailFromDB } from "@/lib/database/product";
import { Product } from "@/types/types";

type IProduct = {
  message?: string;
  product?: Product;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>,
) {
  const product = getProductDetailFromDB();
  if (product) {
    res.status(200).json({ product: product });
  } else {
    res.status(404).json({ message: "Không tìm thấy sản phẩm" });
  }
}
