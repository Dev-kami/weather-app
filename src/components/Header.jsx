import Search from "./Search";

const Header = ({ cityName, setCityName }) => {
  return (
    <header>
      <Search cityName={cityName} setCityName={setCityName} />
    </header>
  );
};

export default Header;
