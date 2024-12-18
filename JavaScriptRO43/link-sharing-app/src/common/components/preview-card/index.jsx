import PropTypes from "prop-types";
import CONSTANTS from "../../index.constants";
import PreviewLink from "../preview-link";
import Container from "./index.styled";
import Heading from "../heading";
import Text from "../text";

const PreviewCard = (props) => {
  return (
    <Container>
      <div className="container__img">
        <img
          alt="Preview Smartphone"
          src={
            props.asProfile
              ? "/assets/preview-smartphone-profile.png"
              : "/assets/preview-smartphone.png"
          }
        />
      </div>
      {props.asProfile && props.profile ? (
        <div className="container__profile">
          <div className="profile__img">
            <img alt="Profile Image" src={props.profile.image} />
          </div>
          <div className="profile__content">
            <Heading>{props.profile.name}</Heading>
            <Text>{props.profile.email}</Text>
          </div>
        </div>
      ) : null}
      <div className="container__links">
        {props.links.map(({ type, urlSuffix }) => {
          const {
            id,
            icon: Icon,
            name,
            color,
            urlPrefix,
          } = CONSTANTS.PLATFORMS[type];
          return (
            <PreviewLink
              key={id}
              iconChildren={<Icon />}
              bkgColor={color}
              url={`${urlPrefix}${urlSuffix}`}
            >
              {name}
            </PreviewLink>
          );
        })}
      </div>
    </Container>
  );
};

PreviewCard.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  asProfile: PropTypes.bool,
  profile: PropTypes.objectOf(PropTypes.string),
};

export default PreviewCard;
