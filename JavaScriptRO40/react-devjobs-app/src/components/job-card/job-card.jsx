import Container from "./job-card.styled";
import Text from "../../common/components/text/text";
import Heading from "../../common/components/heading/heading";
import React from "react";
import utils from "../../common/utils";
import { Link } from "react-router-dom";
import jobService from "../../server/job-service";

const JobCard = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const formatedType = React.useMemo(
    () => utils.getJobType(props.type),
    [props.type]
  );
  const formatedTime = React.useMemo(
    () => utils.getTimeAgo(props.createdAt),
    [props.createdAt]
  );

  const handleDelete = async () => {
    setIsLoading(true);
    await jobService.delete(props.id);
    setIsLoading(false);
  };

  return (
    <Link to={`/jobs/${props.id}`}>
      <Container>
        <div className="job_card__logo">
          <img src={props.companyLogo} alt="Company Logo" />
        </div>
        <div className="job_card__actions">
          <button onClick={handleDelete}>
            {isLoading ? "Loading..." : "Remove"}
          </button>
        </div>
        <div className="job_card__container">
          <div className="job_card__info">
            <Text>{formatedTime}</Text>•<Text>{formatedType}</Text>
          </div>
          <Heading as="h3" size="md">
            {props.name}
          </Heading>
          <Text>{props.companyName}</Text>
          <span className="job_card__badge">
            <Heading as={"h4"} size="sm">
              {props.location}
            </Heading>
          </span>
        </div>
      </Container>
    </Link>
  );
};

export default JobCard;
