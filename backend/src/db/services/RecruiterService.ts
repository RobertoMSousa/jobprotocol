import * as recruiterDal from '../dal/recruiter'

import { RecruiterOuput } from '../models/Recruiter'

export const getAllRecruiters = (page: number): Promise<RecruiterOuput[]> => {
    return recruiterDal.getAllRecruiters(page)
}