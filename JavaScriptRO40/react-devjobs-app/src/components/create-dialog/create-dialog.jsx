import Container from "./create-dialog.styled";
import Button from "../../common/components/button/button";
import jobService from "../../server/job-service";
import React from "react";
import Heading from "../../common/components/heading/heading";

const CreateDialog = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event);

    setIsLoading(true);
    await jobService.create({
      createdAt: new Date().toISOString(),
    });
    setIsLoading(false);
  };

  const handleToggleClick = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Button variant={"shaded"} type={"button"} onClick={handleToggleClick}>
        New Job
      </Button>
      {isOpen && (
        <>
          <div className="create_dialog__overlay" />
          <div className="create_dialog__modal">
            <div className="modal__header">
              <Heading size={"md"}>New job</Heading>
              <button onClick={handleToggleClick}>Close</button>
            </div>
            <form
              id="TqRwfPhGihjHYkyTpSKkw"
              className="modal__content"
              onSubmit={handleSubmit}
            >
              <input
                className="content__text"
                type="text"
                name="name"
                placeholder="Name: Full Stack Engineer"
              />
              <input
                className="content__text"
                type="text"
                name="location"
                placeholder="Location: Romania, Bucuresti"
              />
              <input
                className="content__text"
                type="text"
                name="companyName"
                placeholder="Company Name: MyCompany Inc."
              />
              <input
                className="content__text"
                type="text"
                name="companySite"
                placeholder="Company Site: https://mycompany.com"
              />
              <input
                className="content__text"
                type="text"
                name="companySite"
                placeholder="Company Logo: https://mycompany.com/logo.png"
              />
              <textarea
                name="description"
                placeholder="Write more details about the opportunity"
              />
              <div className="content__radios">
                <div className="radios__group">
                  <input name="type" id="type_1" type="radio" value={0} />
                  <label htmlFor="type_1">Full-Time</label>
                </div>
                <div className="radios__group">
                  <input name="type" id="type_2" type="radio" value={1} />
                  <label htmlFor="type_2">Part-time</label>
                </div>
                <div className="radios__group">
                  <input name="type" id="type_3" type="radio" value={2} />
                  <label htmlFor="type_3">Contract</label>
                </div>
              </div>
            </form>
            <div className="modal__footer">
              <Button form={"TqRwfPhGihjHYkyTpSKkw"} type="submit">
                {isLoading ? "Loading..." : "Save"}
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default CreateDialog;
