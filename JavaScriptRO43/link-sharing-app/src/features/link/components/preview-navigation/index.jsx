import Container from "./index.styled";
import { Button } from "../../../../common";
import { Link } from "react-router";
import { toast } from "react-toastify";

const PreviewNavigation = () => {
  const handleClick = (text) => {
    try {
      navigator.clipboard.writeText(text);
      toast("The preview link was copied.", { type: "success" });
    } catch {
      toast("The preview link was not copied.", { type: "error" });
    }
  };

  return (
    <Container>
      <nav className="container__nav">
        <Link to="/">
          <Button variant="outline">Back to Editor</Button>
        </Link>
        <Button
          variant="fill"
          type="button"
          onClick={() => handleClick(window.location.href)}
        >
          Share Link
        </Button>
      </nav>
    </Container>
  );
};

PreviewNavigation.propTypes = {};

export default PreviewNavigation;
