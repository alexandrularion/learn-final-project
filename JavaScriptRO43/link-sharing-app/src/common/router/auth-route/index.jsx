import PropTypes from "prop-types";
import Container from "./index.styled";
import React from "react";
import { Navigate } from "react-router";

const AuthRoute = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  React.useEffect(() => {
    const idToken = localStorage.getItem("id_token");
    if (!idToken) {
      // Tip: For better security we can fetch to check the signature of the id token
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Container>
        <span className="loader" />
      </Container>
    );
  }
  if (isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  } else {
    return props.children;
  }
};

AuthRoute.propTypes = {
  children: PropTypes.element,
};

export default AuthRoute;
