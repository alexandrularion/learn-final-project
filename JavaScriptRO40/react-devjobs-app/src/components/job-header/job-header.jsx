import Container from "./job-header.styled";
import Heading from "../../common/components/heading/heading";
import Text from "../../common/components/text/text";
import Button from "../../common/components/button/button";
import { Link } from "react-router-dom";

const JobHeader = (props) => {
  return (
    <Container>
      <div className="job_header__avatar">
        <img src={props.companyLogo} alt="Company Logo" />
      </div>
      <div className="job_header__content">
        <div className="content__details">
          <Heading size="md">{props.companyName}</Heading>
          <Text>{props.companySite}</Text>
        </div>
        <Link to={props.companySite} target="_blank" rel="noopener norefrrer">
          <Button variant="shaded">Company Site</Button>
        </Link>
      </div>
    </Container>
  );
};

export default JobHeader;
