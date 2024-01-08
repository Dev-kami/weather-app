import { FaAngleDown } from "react-icons/fa6";

const Search = ({ cityName, setCityName }) => {
  return (
    <>
      <div className="search-wrapper">
        <input
          className="search"
          type="search"
          placeholder="Search for Country or City"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          autoFocus={true}
        />
        <span className="search-icon">
          <FaAngleDown
            fontSize={"1.5rem"}
            color="#d5d4d4"
            className="angle-down"
          />
        </span>
      </div>
    </>
  );
};

export default Search;
