import Container from "./search.styled";
import Button from "../../common/components/button/button";
import LocationSvg from "../../assets/location.svg?react";
import SearchSvg from "../../assets/search.svg?react";
import jobService from "../../server/job-service";
import CONSTANTS from "../../common/constants";
import CreateDialog from "../create-dialog/create-dialog";

const Search = (props) => {
  const handleSubmit = async (event) => {
    props.setIsLoading(true);

    event.preventDefault();
    const name = event.target[0].value;
    const location = event.target[1].value;
    const onlyFullTime = event.target[2].checked;

    let filters = [];

    // filter object: { field: "name", op: ">=", value: "myValue" }
    if (name.length > 0) {
      filters.push({
        field: "name",
        op: ">=",
        value: name,
      });
    }
    if (location.length > 0) {
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
    const data = await jobService.readByFilters({
      filters,
      totalItems: CONSTANTS.FETCHING.PAGE_ITEMS,
    });
    props.setJobs(data);
    props.setIsLoading(false);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <div className="search__input search__input--1">
        <SearchSvg />
        <input type="text" name="search" placeholder="Filter by job title" />
      </div>
      <hr className="search__hr" />
      <div className="search__input search__input--2">
        <LocationSvg />
        <input type="text" name="location" placeholder="Filter by location…" />
      </div>
      <hr className="search__hr" />
      <div className="search__input search__input--3">
        <input type="checkbox" name="type" />
        <label htmlFor="type">Full Time Only</label>
      </div>
      <Button disabled={props.isLoading} type="submit">
        {props.isLoading ? "Loading..." : "Search"}
      </Button>
      <hr className="search__hr" />
      <CreateDialog />
    </Container>
  );
};

export default Search;
