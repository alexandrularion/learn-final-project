import styled from "styled-components";
import hooks from "../common/hooks";

const HomePage = () => {
  const session = hooks.useAuthSession();

  console.log(session);

  return (
    <Container>
      {session.isLoading ? (
        "Loading..."
      ) : session.isAuthenticated ? (
        <button>Post an ad</button>
      ) : null}
    </Container>
  );
};

const Container = styled.main`
  display: flex;
`;

export default HomePage;
