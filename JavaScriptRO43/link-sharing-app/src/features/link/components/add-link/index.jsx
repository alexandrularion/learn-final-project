import Container from "./index.styled";
import { Button } from "../../../../common";
import PropTypes from "prop-types";
import React from "react";
import Api from "../../../../api";
import { toast } from "react-toastify";

const AddLink = (props) => {
  const [order, setOrder] = React.useState(0);

  const handleClick = async () => {
    const userId = localStorage.getItem("user_id");
    const link = { order: order, platform: "linkedin", url: "" };
    const data = await Api.link.create({
      platform: link.platform,
      order: link.order,
      url: link.url,
      userId,
    });
    if (data) {
      props.setLinks([...props.links, { ...link, id: data.name, userId }]);
      setOrder(order + 1);
      toast("The link was added successfully.", { type: "success" });
    } else {
      toast("We couldn't add the link.", { type: "error" });
    }
  };

  return (
    <Container>
      <Button variant={"outline"} onClick={handleClick}>
        + Add new link
      </Button>
    </Container>
  );
};

AddLink.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  setLinks: PropTypes.func,
};

export default AddLink;
