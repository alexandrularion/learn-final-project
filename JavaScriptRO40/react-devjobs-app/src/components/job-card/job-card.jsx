import Container from "./job-card.styled";
import Text from "../../common/components/text/text";
import Heading from "../../common/components/heading/heading";
import React from "react";
import utils from "../../common/utils";
import { useNavigate } from "react-router-dom";

const JobCard = (props) => {
  const navigate = useNavigate();

  const formatedType = React.useMemo(
    () => utils.getJobType(props.type),
    [props.type]
  );
  const formatedTime = React.useMemo(
    () => utils.getTimeAgo(props.createdAt),
    [props.createdAt]
  );
  const jobUrl = React.useMemo(() => `/jobs/${props.id}`, [props]);

  const handleUrlClick = () => {
    navigate(jobUrl);
  };

  return (
    <Container onClick={handleUrlClick}>
      <div className="job_card__logo">
        <img src={props.companyLogo} alt="Company Logo" />
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
  );
};

export default JobCard;
