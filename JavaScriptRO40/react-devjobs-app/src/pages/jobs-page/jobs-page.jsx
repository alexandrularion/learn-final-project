import Container from "./jobs-page.styled";
import AppLayout from "../../common/layouts/app-layout/app-layout";
import Search from "../../components/search/search";
import JobCard from "../../components/job-card/job-card";
import Button from "../../common/components/button/button";
import { useLoaderData } from "react-router-dom";
import React from "react";
import CONSTANTS from "../../common/constants";
import Text from "../../common/components/text/text";
import Heading from "../../common/components/heading/heading";

const JobsPage = () => {
  const loaderData = useLoaderData();

  const [jobs, setJobs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setJobs(loaderData);
  }, [loaderData]);

  return (
    <AppLayout>
      <Container>
        <Search
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setJobs={setJobs}
        />
        <div className="jobs_page__cards">
          {jobs && jobs.length ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                name={job.name}
                location={job.location}
                createdAt={job.createdAt}
                type={job.type}
                companyName={job.companyName}
                companyLogo={job.companyLogo}
              />
            ))
          ) : (
            <div className="jobs_page__empty_state">
              <Heading size={"md"}>No jobs found.</Heading>
              <Text>Please try again with other options.</Text>
            </div>
          )}
        </div>
        {jobs.length >= CONSTANTS.FETCHING.PAGE_ITEMS ? (
          <Button disabled={isLoading}>Load more</Button>
        ) : null}
      </Container>
    </AppLayout>
  );
};

export default JobsPage;
