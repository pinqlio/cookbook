import type { NextApiRequest, NextApiResponse } from "next";
import { getMock } from "../../../mocks";

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    console.log(req.query)
    const { pid } = req.query
    res.status(200).json(getMock.articles[Number(pid)])
}