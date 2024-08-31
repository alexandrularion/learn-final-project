import Container from "./search.styled";
import Button from "../../common/components/button/button";
import LocationSvg from "../../assets/location.svg?react";
import SearchSvg from "../../assets/search.svg?react";
import jobService from "../../server/job-service";
import CreateDialog from "../create-dialog/create-dialog";

const Search = (props) => {
  const { isLoading, setIsLoading, setJobs } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    const name = event.target[0].value;
    const location = event.target[1].value;
    const onlyFullTime = event.target[2].checked;

    const filters = [];
    // filter object: { field: "name", op: ">=", value: "software engineer" }

    if (name.length) {
      filters.push({
        field: "name",
        op: ">=",
        value: name,
      });
    }
    if (location.length) {
      filters.push({
        field: "location",
        op: ">=",
        value: location,
      });
    }
    if (onlyFullTime) {
      filters.push({
        field: "type",
        op: "==",
        value: 0,
      });
    }

    const data = await jobService.readByFilters(filters);
    setJobs(data);
    setIsLoading(false);
  };

  return (
    <Container>
      <form id="search_form" onSubmit={handleSubmit}>
        <div className="search__input search__input--1">
          <SearchSvg />
          <input type="text" name="search" placeholder="Filter by job name…" />
        </div>
        <hr className="search__hr" />
        <div className="search__input search__input--2">
          <LocationSvg />
          <input
            type="text"
            name="location"
            placeholder="Filter by location…"
          />
        </div>
        <hr className="search__hr" />
        <div className="search__input search__input--3">
          <input type="checkbox" name="type" />
          <label htmlFor="type">Full Time Only</label>
        </div>
      </form>
      <Button form="search_form" type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Search"}
      </Button>
      <hr className="search__hr" />
      <CreateDialog />
    </Container>
  );
};

export default Search;
