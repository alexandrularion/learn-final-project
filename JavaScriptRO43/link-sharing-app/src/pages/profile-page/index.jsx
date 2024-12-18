import React from "react";
import { AppLayout } from "../../common";
import Container from "./index.styled";
import Api from "../../api";

const ProfilePage = () => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    const fetchLinks = async () => {
      const userId = localStorage.getItem("user_id");
      const data = await Api.link.readAllByUserId(userId);
      setLinks(data);
    };
    fetchLinks();
  }, []);

  return (
    <AppLayout links={links}>
      <Container> my links</Container>
    </AppLayout>
  );
};

export default ProfilePage;
