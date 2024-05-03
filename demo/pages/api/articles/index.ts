import  type { NextApiRequest , NextApiResponse } from 'next'
import { getMock } from "../../../mocks";

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // console.log(getMock.new_articles)
    res.status(200).json(getMock.articles)
}