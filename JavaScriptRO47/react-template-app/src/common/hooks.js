import React from "react";

const hooks = {
  useAuthSession: () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      // run only once
      const userSession = localStorage.getItem("user.session");
      const userSessionParsed = JSON.parse(userSession);

      if (
        userSessionParsed &&
        userSessionParsed.idToken &&
        userSessionParsed.expiresIn
      ) {
        const currentTime = new Date().getTime(); // e.g. 1741441474

        if (currentTime < userSessionParsed.expiresIn) {
          // Tip: authenticated and he has a valid token which is not expired
          // Improvement: you can check on backend side if the idToken is valid
          setIsAuthenticated(true);
        }
      }

      setIsLoading(false);
    }, []);

    return { isLoading, isAuthenticated };
  },
};

export default hooks;
