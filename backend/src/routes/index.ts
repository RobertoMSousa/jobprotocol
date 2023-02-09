import { Router } from 'express'

import recruiterRouter from './recruiter';


const router = Router()

router.use('/recruiters', recruiterRouter)

export default router