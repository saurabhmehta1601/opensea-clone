import { NextApiRequest, NextApiResponse } from "next";

export default function Handler(_req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ token: process.env.SANITY_TOKEN });
}
