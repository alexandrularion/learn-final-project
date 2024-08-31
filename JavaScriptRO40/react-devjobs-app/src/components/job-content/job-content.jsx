import Container from "./job-content.styled";
import Text from "../../common/components/text/text";
import React from "react";
import utils from "../../common/utils";
import Heading from "../../common/components/heading/heading";

const JobContent = (props) => {
  const formatedType = React.useMemo(
    () => utils.getJobType(props.type),
    [props.type]
  );
  const formatedTime = React.useMemo(
    () => utils.getTimeAgo(props.createdAt),
    [props.createdAt]
  );

  return (
    <Container>
      <div className="job_content__details">
        <div className="details__quick">
          <Text>{formatedTime}</Text> • <Text>{formatedType}</Text>
        </div>
        <Heading>{props.name}</Heading>
        <span className="details__badge">
          <Heading as="h4" size="sm">
            {props.location}
          </Heading>
        </span>
      </div>
      <div className="job_content__description">
        <Text>{props.description}</Text>
      </div>
    </Container>
  );
};

export default JobContent;
