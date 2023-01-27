import "./Navbar.css";

const Navbar = () => {
  return (
      <div className="navbar">
      <h3 className="navbar-title">Landing page</h3>
          <ul className="navbar-list">
            <li className="navbar-items">Home</li>
            <li className="navbar-items">How it works</li>
            <li className="navbar-items">pricing</li>
            <li className="navbar-items">team</li>
            <li className="navbar-items">contact</li>
          </ul>
      </div>
  );
};

export default Navbar;