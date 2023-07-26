import { NextApiRequest, NextApiResponse } from "next";
import { fetchRedisFormState, persistRedisFormState } from "../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const formData = req.body;
    try {
      await persistRedisFormState(formData);
      return res.status(200).json(formData);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Redis provider is unavailable" });
    }
  } else {
    try {
      const formData = await fetchRedisFormState();
      return res.status(200).json(formData);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Redis provider is unavailable" });
    }
  }
}
