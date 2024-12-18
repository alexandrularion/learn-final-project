import PropTypes from "prop-types";
import Container from "./index.styled";
import LinkCardForm from "../link-card-form";
import LinkEmptyState from "../link-empty-state";

const ListLinks = (props) => {
  return (
    <Container>
      {props.links && props.links.length > 0 ? (
        props.links.map((link, index) => (
          <LinkCardForm
            key={link.id}
            id={link.id}
            platform={link.platform}
            url={link.url}
            order={index}
            userId={link.userId}
            links={props.links}
            setLinks={props.setLinks}
          />
        ))
      ) : (
        <LinkEmptyState />
      )}
    </Container>
  );
};

ListLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  setLinks: PropTypes.func,
};

export default ListLinks;
