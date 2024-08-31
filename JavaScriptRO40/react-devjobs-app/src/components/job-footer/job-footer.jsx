import { useLoaderData } from "react-router-dom";
import Container from "./job-footer.styled";
import Heading from "../../common/components/heading/heading";
import Text from "../../common/components/text/text";
import Button from "../../common/components/button/button";

const JobFooter = () => {
  const job = useLoaderData();
  return (
    <Container>
      <div className="job_footer__alignment">
        <div className="alignment__details">
          <Heading size={"md"}>{job.name}</Heading>
          <Text>{job.companyName}</Text>
        </div>
        <Button>Apply Now</Button>
      </div>
    </Container>
  );
};

export default JobFooter;