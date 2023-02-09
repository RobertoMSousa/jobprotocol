
import { bubble_candidate, bubble_user } from '../models'
import { RecruiterOuput } from '../models/Recruiter'


export const getAllRecruiters = async (): Promise<RecruiterOuput[]> => {
    try {
        const user = await bubble_user.findAll({
            where: { type: "Recruiter" },
            include: [{
                required: false,
                model: bubble_candidate
            }],
            group: ['bubble_user._id', 'bubble_user.auth_email', 'bubble_user.first_name', 'bubble_user.last_name', 'bubble_user.type', "bubble_candidates._id", "bubble_candidates.referred_by", "bubble_candidates.job_protocol_review_state"],
            attributes: [
                '_id',
                'auth_email',
                'first_name',
                'last_name',
                'type'
            ],
        })

        const data = user.map(u => {
            const recruiter = u.toJSON();
            const reputationCounter = recruiter.bubble_candidates?.reduce((acc, candidate) => {
                if (candidate.job_protocol_review_state === "Great Fit") {
                    return { reputation: acc.reputation + 2 }
                }
                else {
                    if (candidate.job_protocol_review_state === "Accepted") {
                        return { reputation: acc.reputation + 1 }
                    }
                    else {
                        return acc
                    }
                }

            }, { reputation: 0 })
            const { bubble_candidates, ...restRecruiter } = recruiter;
            return { recruiter: restRecruiter, ...reputationCounter, totalCandidates: recruiter.bubble_candidates?.length };
        });

        return data;
    } catch (error) {
        throw (error)
    }

}