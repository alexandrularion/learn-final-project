import Container from "./template-page.styled";
import { collection, getDocs, query } from "firebase/firestore";
import React from "react";
import { firestoreDatabase } from "../../common/firebase";

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

  return <Container>Template Page</Container>;
};

export default TemplatePage;
