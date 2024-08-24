import Container from "./template-page.styled";
import { collection, getDocs, query } from "firebase/firestore";
import React from "react";
import { firestoreDatabase } from "../../common/firebase";
import Button from "../../common/components/button/button";
import Heading from "../../common/components/heading/heading";
import Text from "../../common/components/text/text";

const TemplatePage = () => {
  const getAllJobs = async () => {
    const data = [];

    const jobCollection = collection(firestoreDatabase, "job");
    const jobQuery = query(jobCollection);
    const querySnapshot = await getDocs(jobQuery);

    querySnapshot.forEach((document) => {
      const restOfDoc = document.data();
      data.push({
        id: document.id,
        ...restOfDoc,
      });
    });

    console.log(data);
  };

  React.useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <Container>
      Template Page
      {/* Only for testing */}
      <Button>Click me</Button>
      <Button variant="shaded">Click me</Button>
      {/* Only for testing */}
      <Heading>Software engineer xl</Heading>
      <Heading as="h2" size="lg">
        Software engineer lg
      </Heading>
      <Heading as="h3" size="md">
        Software engineer md
      </Heading>
      <Heading as="h4" size="sm">
        Software engineer sm
      </Heading>
      {/* Only for testing */}
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        nam eius blanditiis debitis animi iusto, dolore illum quod veniam
        assumenda expedita quo saepe explicabo delectus praesentium harum
        consequatur deleniti exercitationem.
      </Text>
    </Container>
  );
};

export default TemplatePage;
