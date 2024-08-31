import Container from "./create-dialog.styled";
import Button from "../../common/components/button/button";
import Heading from "../../common/components/heading/heading";
import React from "react";

const CreateDialog = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleClick = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    setIsLoading(true);

    // request server

    props.setJobs((currentJobs) => [...currentJobs, { id: "" }]);
    setIsLoading(false);
  };

  return (
    <Container>
      <Button variant="shaded" type="button" onClick={handleToggleClick}>
        New Job
      </Button>
      {isOpen && (
        <>
          <div className="create_dialog__overlay" />
          <div className="create_dialog__modal">
            <header className="modal__header">
              <Heading size="md">New Job</Heading>
              <Button onClick={handleToggleClick}>Close</Button>
            </header>
            <form
              id="create__form"
              className="modal__form"
              onSubmit={handleSubmit}
            >
              <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Name: Full Stack Engineer"
              />
              <input
                className="form__input"
                type="text"
                name="location"
                placeholder="Location: Romania, Bucuresti"
              />
              <input
                className="form__input"
                type="text"
                name="companyName"
                placeholder="Company name: MyCompany"
              />
              <input
                className="form__input"
                type="text"
                name="companySite"
                placeholder="Company site: https://mycompany.com"
              />
              <input
                className="form__input"
                type="text"
                name="companyLogo"
                placeholder="Company logo: https://mycompany.com/logo.png"
              />
              <textarea
                className="form__textarea"
                name="description"
                placeholder="Write more details about the opportunity"
              />
              <div className="form__radios">
                <div className="radios__container">
                  <input id="type--1" name="type" type="radio" value={0} />
                  <label htmlFor="type--1">Full-Time</label>
                </div>
                <div className="radios__container">
                  <input id="type--2" name="type" type="radio" value={1} />
                  <label htmlFor="type--2">Part-Time</label>
                </div>
                <div className="radios__container">
                  <input id="type--3" name="type" type="radio" value={2} />
                  <label htmlFor="type--3">Contract</label>
                </div>
              </div>
            </form>
            <footer className="modal__footer">
              <Button form="create__form" type="submit">
                {isLoading ? "Loading..." : "Save"}
              </Button>
            </footer>
          </div>
        </>
      )}
    </Container>
  );
};

export default CreateDialog;
