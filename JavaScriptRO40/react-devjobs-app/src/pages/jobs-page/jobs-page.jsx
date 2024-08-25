import Container from "./jobs-page.styled";
import AppLayout from "../../common/layouts/app-layout/app-layout";
import Search from "../../components/search/search";

const JobsPage = () => {
  return (
    <AppLayout>
      <Container>
        <Search />
      </Container>
    </AppLayout>
  );
};

export default JobsPage;
