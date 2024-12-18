import React from "react";
import { PreviewProfile, PreviewNavigation } from "../../features/link";
import Container from "./index.styled";
import Api from "../../api";
import { useParams } from "react-router";

const PreviewPage = () => {
  const params = useParams();
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    const userId = params.userId;
    const idRegex = /^[a-zA-Z0-9_-]{28}$/;
    if (idRegex.test(userId)) {
      const fetchLinks = async () => {
        const userId = localStorage.getItem("user_id");
        const data = await Api.link.readAllByUserId(userId);
        setLinks(data);
      };
      fetchLinks();
    }
  }, [params]);

  return (
    <Container>
      <PreviewNavigation />
      <PreviewProfile links={links} />
    </Container>
  );
};

export default PreviewPage;
