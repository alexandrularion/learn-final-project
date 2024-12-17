import Button from "../button";
import Container from "./index.styled";
import { NavLink, Link, useNavigate } from "react-router";
import LinkIcon from "../../../assets/ph_lock-key-fill.svg?react";
import ProfileIcon from "../../../assets/ph_user-circle-bold.svg?react";
import Api from "../../../api";
import { toast } from "react-toastify";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    Api.user.logout();
    await navigate("/auth/login");
    toast("You have been logged out.", { type: "success" });
  };

  return (
    <Container>
      <div className="container__logo">
        <img alt="devlinks app logo" src="/assets/logo.png" />
      </div>
      <div className="container__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "links__route links__route--active" : "links__route"
          }
          end={true}
          to="/"
        >
          <LinkIcon />
          Links
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "links__route links__route--active" : "links__route"
          }
          end={true}
          // TODO: Replace with actual id
          to="/profile/123123"
        >
          <ProfileIcon />
          Profile
        </NavLink>
      </div>
      <div className="container__buttons">
        <Button
          variant="outline"
          className="buttons__logout"
          onClick={handleLogout}
        >
          Logout
        </Button>
        {/* TODO: Replace slug with actual id */}
        <Link to="/preview/1231231">
          <Button variant="fill">Preview</Button>
        </Link>
      </div>
    </Container>
  );
};

Navigation.propTypes = {};

export default Navigation;
