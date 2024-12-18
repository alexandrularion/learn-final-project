import React from "react";
import { AppLayout, Header } from "../../common";
import { ListLinks, AddLink } from "../../features/link";
import Container from "./index.styled";
import Api from "../../api";

const LinksPage = () => {
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
      <Container>
        <Header
          headingLabel={"Customize your links"}
          textLabel={
            "Add/edit/remove links below and then share all your profiles with the world!"
          }
        />
        <AddLink setLinks={setLinks} links={links} />
        <ListLinks setLinks={setLinks} links={links} />
      </Container>
    </AppLayout>
  );
};

export default LinksPage;
