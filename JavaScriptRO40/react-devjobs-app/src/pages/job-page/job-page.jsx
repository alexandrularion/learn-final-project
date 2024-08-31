import Container from "./job-page.styled";
import AppLayout from "../../common/layouts/app-layout/app-layout";
import JobHeader from "../../components/job-header/job-header";
import { useLoaderData } from "react-router-dom";
import JobContent from "../../components/job-content/job-content";
import JobFooter from "../../components/job-footer/job-footer";

const JobPage = () => {
  const job = useLoaderData();

  return (
    <>
      <AppLayout>
        <Container>
          <div className="job_page__alignment">
            <JobHeader
              companyLogo={job.companyLogo}
              companyName={job.companyName}
              companySite={job.companySite}
            />
            <JobContent
              type={job.type}
              createdAt={job.createdAt}
              name={job.name}
              location={job.location}
              description={job.description}
            />
          </div>
        </Container>
      </AppLayout>
      <JobFooter name={job.name} companyName={job.companyName} />
    </>
  );
};

export default JobPage;
