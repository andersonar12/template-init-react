import { useContext } from "react";
import { useLocation, useNavigate, Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const navLinks = [
  { name: "Home", link: "/main/home" },
  { name: "Page1", link: "/main/page1" },
  { name: "Page2", link: "/main/page2" },
];
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setUser } = useContext(AuthContext);

  const logout = () => {
    setUser({ name: "", logged: false });
    navigate("/", { state: pathname }); //guardamos en el state del router la ultima pagina visitada
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center">
          <img src={require("../assets/favicon.ico")} width="30" alt="" className="mr-3"></img>
          <strong>React App</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            {navLinks.map((item, i) => (
              <NavLink
                className={`${(props: any) => (props.isActive ? "active" : "inactive")} nav-link`}
                key={i}
                to={item.link}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <button className="btn btn-danger my-2 my-sm-0" onClick={() => logout()}>
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
