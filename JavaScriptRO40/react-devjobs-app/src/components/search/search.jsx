import Container from "./search.styled";
import Button from "../../common/components/button/button";
import LocationSvg from "../../assets/location.svg?react";
import SearchSvg from "../../assets/search.svg?react";

const Search = () => {
  return (
    <Container>
      <div className="search__input search__input--1">
        <SearchSvg />
        <input
          type="text"
          name="search"
          placeholder="Filter by title, companies, expertise…"
        />
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
      <Button>Search</Button>
    </Container>
  );
};

export default Search;
