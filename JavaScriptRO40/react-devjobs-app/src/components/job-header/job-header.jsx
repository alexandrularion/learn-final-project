import { Link, useLoaderData } from "react-router-dom";
import Container from "./job-header.styled";
import Heading from "../../common/components/heading/heading";
import Text from "../../common/components/text/text";
import Button from "../../common/components/button/button";

const JobHeader = () => {
  const job = useLoaderData();
  return (
    <Container>
      <div className="job_header__avatar">
        <img src={job.companyLogo} alt={"Company Logo"} />
      </div>
      <div className="job_header__content">
        <div className="content__details">
          <Heading size={"md"}>{job.companyName}</Heading>
          <Text>{job.companySite}</Text>
        </div>
        <Link to={job.companySite} target="_blank" rel="noopener noreferrer">
          <Button variant={"shaded"}>Company Site</Button>
        </Link>
      </div>
    </Container>
  );
};

export default JobHeader;
