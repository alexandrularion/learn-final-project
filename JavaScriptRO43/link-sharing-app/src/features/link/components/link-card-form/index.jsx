import PropTypes from "prop-types";
import Container from "./index.styled";
import {
  Button,
  CONSTANTS,
  DropdownField,
  Heading,
  TextField,
} from "../../../../common";
import Api from "../../../../api";
import { toast } from "react-toastify";
import UrlIcon from "../../../../assets/ph_link-bold.svg?react";
import React from "react";

const LinkCardForm = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    platform: "linkedin",
    url: "",
  });
  const isFormDirty =
    JSON.stringify({ platform: props.platform, url: props.url }) !==
    JSON.stringify(form);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const options = Object.entries(CONSTANTS.PLATFORMS).map(([key, value]) => ({
    id: value.id,
    name: value.name,
    value: key,
  }));
  const isIconVisible = Boolean(CONSTANTS.PLATFORMS[form.platform]?.icon);
  const Icon = isIconVisible ? CONSTANTS.PLATFORMS[form.platform].icon : null;

  const handleDelete = async (id) => {
    setIsLoading(true);
    const data = await Api.link.deleteById(id);
    if (!data && id) {
      props.setLinks(props.links.filter((link) => link.id !== id));
      toast("The link was deleted succesfully.", { type: "success" });
    } else {
      toast("We couldn't delete the link.", { type: "error" });
    }
    setIsLoading(false);
  };

  const handleUpdate = async (id) => {
    setIsLoading(true);
    const data = await Api.link.updateById(id, {
      platform: form.platform,
      url: form.url,
      order: props.order,
      userId: props.userId,
    });
    if (data) {
      props.setLinks(
        props.links.map((link) => {
          if (link.id === id) {
            return {
              ...link,
              platform: form.platform,
              order: props.order,
              url: form.url,
            };
          }
          return link;
        })
      );
      toast("The link was updated.", { type: "success" });
    } else {
      toast("We couldn't update the link.", { type: "error" });
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    setForm({ platform: props.platform, url: props.url });
  }, [props]);

  return (
    <Container>
      <div className="container__header">
        <Heading size="sm">{`Link #${props.order}`}</Heading>
        <button
          className="header__btn"
          type="button"
          onClick={() => handleDelete(props.id)}
          disabled={isLoading}
        >
          Remove
        </button>
      </div>
      <DropdownField
        id="platform"
        isIconVisible={isIconVisible}
        iconChildren={<Icon />}
        options={options}
        value={form.platform}
        onChange={(event) => handleChange("platform", event.target.value)}
      />
      <TextField
        id="url"
        isIconVisible={true}
        iconChildren={<UrlIcon />}
        placeholder="e.g. https://www.github.com/johnappleseed"
        value={form.url}
        onChange={(event) => handleChange("url", event.target.value)}
      />
      <Button
        variant="fill"
        style={{ width: "max-content", alignSelf: "flex-end" }}
        type="button"
        disabled={isLoading || !isFormDirty}
        onClick={() => handleUpdate(props.id)}
      >
        {isLoading ? "Loading..." : "Save"}
      </Button>
    </Container>
  );
};

LinkCardForm.propTypes = {
  platform: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  id: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  setLinks: PropTypes.func,
};

export default LinkCardForm;
