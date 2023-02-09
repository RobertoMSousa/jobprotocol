import Head from "next/head";
import LinkMenu from "../components/LinkMenu";
import { useFetchRecruiter } from "../hooks/useRecruiter";
import { Recruiter } from "../interfaces/recruiter";

const Home = () => {
  const { recruiters } = useFetchRecruiter();
  return (
    <>
      <Head>
        <title>Next js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {recruiters?.map((recruiter: Recruiter) => {
          return (
            <div key={recruiter.recruiter._id}>
              <h1>{recruiter.recruiter.auth_email}</h1>
              <h2>
                {recruiter.totalCandidates >= 20
                  ? `${recruiter.reputation} points`
                  : `initializing`}
              </h2>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
