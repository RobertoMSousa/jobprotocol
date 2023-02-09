import { useEffect, useState } from "react";
import { Recruiter } from "../interfaces/recruiter";

export const useFetchRecruiter = () => {
  const [recruitersList, setRecruitersList] = useState<Recruiter[]>([]);

  useEffect(() => {
    const recruiterFetch = async () => {
      try {
        const data = await (
          await fetch("http://localhost:4000/api/recruiters")
        ).json();

        setRecruitersList(data);
      } catch (error) {}
    };

    recruiterFetch();
  }, []);

  return { recruiters: recruitersList, setCurrenciesList: setRecruitersList };
};
