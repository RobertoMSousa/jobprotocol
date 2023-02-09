

import * as service from '../db/services/RecruiterService'
import { bubble_user } from '../interfaces'



export const getAllRecruiters = async (): Promise<bubble_user[]> => {
    return await service.getAllRecruiters()
}