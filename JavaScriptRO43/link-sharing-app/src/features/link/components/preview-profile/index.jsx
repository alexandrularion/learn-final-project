import { PreviewCard } from "../../../../common";
import Container from "./index.styled";

const PreviewProfile = () => {
  // TODO: Fetch data for preview card
  const links = [
    { type: "youtube", urlSuffix: "/alexandrularion" },
    { type: "facebook", urlSuffix: "/alexandrularion" },
  ];

  return (
    <Container>
      <PreviewCard
        links={links}
        asProfile={true}
        profile={{
          image:
            "https://images.pexels.com/photos/29614393/pexels-photo-29614393/free-photo-of-traditional-vietnamese-women-in-ao-dai-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          name: "John doe",
          email: "john.doe@gmail.com",
        }}
      />
    </Container>
  );
};

PreviewProfile.propTypes = {};

export default PreviewProfile;
