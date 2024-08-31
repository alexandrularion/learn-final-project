import { useLoaderData } from "react-router-dom";
import Text from "../../common/components/text/text";
import Heading from "../../common/components/heading/heading";
import Container from "./job-description.styled";
import React from "react";
import utils from "../../common/utils";

const JobDescription = () => {
  const job = useLoaderData();

  const formatedType = React.useMemo(() => utils.getJobType(job.type), [job]);
  const formatedTime = React.useMemo(
    () => utils.getTimeAgo(job.createdAt),
    [job]
  );

  return (
    <Container>
      <div className="job_description__details">
        <div className="details__quick">
          <Text>{formatedTime}</Text>•<Text>{formatedType}</Text>
        </div>
        <Heading>{job.name}</Heading>
        <span className="details__badge">
          <Heading as={"h4"} size="sm">
            {job.location}
          </Heading>
        </span>
      </div>
      <div className="job_description__content">
        <Text>{job.description}</Text>
      </div>
    </Container>
  );
};

export default JobDescription;
