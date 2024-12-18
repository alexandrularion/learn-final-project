import PropTypes from "prop-types";
import { PreviewCard } from "../../../../common";
import Container from "./index.styled";

const PreviewProfile = (props) => {
  return (
    <Container>
      <PreviewCard
        links={props.links}
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

PreviewProfile.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default PreviewProfile;
