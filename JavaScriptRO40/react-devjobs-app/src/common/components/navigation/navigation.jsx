import Container from "./navigation.styled";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <div className="navigation__alignment">
        <Link to="/">
          <div className="navigation__logo">
            <img src="/logo.png" alt="devjobs logo" />
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Navigation;
