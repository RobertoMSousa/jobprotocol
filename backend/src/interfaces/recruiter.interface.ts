export interface bubble_user {
    recruiter: {
        _id: string;
        auth_email: string;
        first_name: string;
        last_name: string;
        type: string;
    }
    reputation?: number | undefined;
    totalCandidates: number | undefined;
}