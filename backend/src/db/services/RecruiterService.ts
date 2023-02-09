import * as recruiterDal from '../dal/recruiter'

import { RecruiterOuput } from '../models/Recruiter'

export const getAllRecruiters = (): Promise<RecruiterOuput[]> => {
    return recruiterDal.getAllRecruiters()
}