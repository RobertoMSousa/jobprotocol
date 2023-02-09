import { getAllRecruiters } from '../controllers/recuiter';
import { Router, Request, Response } from 'express'

const recruiterRouter = Router()



recruiterRouter.get('/', async (_req: Request, res: Response) => {
    const allTheRecruiters = await getAllRecruiters()
    res.status(200).json(allTheRecruiters);
});

export default recruiterRouter