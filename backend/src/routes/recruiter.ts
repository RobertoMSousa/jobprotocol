import { getAllRecruiters } from '../controllers/recuiter';
import { Router, Request, Response } from 'express'
import { getValidPage } from '../utils/getValidaPage';

const recruiterRouter = Router()


recruiterRouter.get('/', async (req: Request, res: Response) => {
    try {
        const { query } = req;
        const { page } = query;
        const validaPage = getValidPage(Number(page))
        const allTheRecruiters = await getAllRecruiters(validaPage)
        res.status(200).json({ page: validaPage, allTheRecruiters });
        return;

    }
    catch (error) {
        res.status(500).json({ error: error });
        return;
    }

});

export default recruiterRouter