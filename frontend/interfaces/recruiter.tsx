export interface Recruiter {
  recruiter: {
    _id: string;
    auth_email: string;
    first_name: string;
    last_name: string;
    type: string;
  };
  reputation: number;
  totalCandidates: number;
}
