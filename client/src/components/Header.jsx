import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <Link to="/">Emaily</Link>
      <Link to="/dashboard">Login with google</Link>
    </>
  );
};
export default Header;
