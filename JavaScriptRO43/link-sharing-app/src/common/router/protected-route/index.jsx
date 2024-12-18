import PropTypes from "prop-types";
import Container from "./index.styled";
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const idToken = localStorage.getItem("id_token");
    if (idToken) {
      // Tip: For better security we can fetch to check the signature of the id token
      setIsAuthenticated(true);
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
    return props.children;
  } else {
    return <Navigate to="/auth/login" replace={true} />;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};

export default ProtectedRoute;
