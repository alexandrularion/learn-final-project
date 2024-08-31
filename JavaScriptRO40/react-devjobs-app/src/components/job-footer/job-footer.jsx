import Container from "./job-footer.styled";
import Heading from "../../common/components/heading/heading";
import Text from "../../common/components/text/text";
import Button from "../../common/components/button/button";

const JobFooter = (props) => {
  return (
    <Container>
      <div className="job_footer__alignment">
        <div className="alignment__details">
          <Heading size="md">{props.name}</Heading>
          <Text>{props.companyName}</Text>
        </div>
        <Button>Apply now</Button>
      </div>
    </Container>
  );
};

export default JobFooter;
