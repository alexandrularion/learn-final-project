import Container from "./job-page.styled";
import AppLayout from "../../common/layouts/app-layout/app-layout";
import JobHeader from "../../components/job-header/job-header";
import JobDescription from "../../components/job-description/job-description";
import JobFooter from "../../components/job-footer/job-footer";

const JobPage = () => {
  return (
    <>
      <AppLayout>
        <Container>
          <div className="job_page__alignment">
            <JobHeader />
            <JobDescription />
          </div>
        </Container>
      </AppLayout>
      <JobFooter />
    </>
  );
};

export default JobPage;
