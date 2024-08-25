import Container from "./jobs-page.styled";
import AppLayout from "../../common/layouts/app-layout/app-layout";
import Search from "../../components/search/search";
import JobCard from "../../components/job-card/job-card";

const JobsPage = () => {
  return (
    <AppLayout>
      <Container>
        <Search />
        <JobCard
          name="Software Engineer"
          location="United Kingdom"
          createdAt="2024-08-25T12:22:56.938Z"
          type={0}
          companyName="Mystery company"
          companyLogo="https://marketplace.canva.com/EAE0rNNM2Fg/1/0/1600w/canva-letter-c-trade-marketing-logo-design-template-r9VFYrbB35Y.jpg"
        />
      </Container>
    </AppLayout>
  );
};

export default JobsPage;
