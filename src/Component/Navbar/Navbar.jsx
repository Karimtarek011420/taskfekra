import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className=" container-fluid ">
          <NavLink className="navbar-brand  px-lg-5" to="#">
            {" "}
            <img src={logo} width={"200"} height={100} />{" "}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  fs-4 text-white"
                  aria-current="page"
                  to="#"
                >
                  البداية
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 text-white" to="#">
                  {" "}
                  الدول
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 text-white" to="#">
                  {" "}
                  العروض
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 text-white" to="#">
                  مركز المساعدة
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 text-white" to="#">
                  اتصل بنا
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 text-white" to="#">
                  {" "}
                  Engilsh
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 text-white" to="#">
                  {" "}
                  ر.س
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2  mx-lg-5 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  fs-4 text-white"
                  aria-current="page"
                  to="/login"
                >
                  الدخول
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-6 text-white resgister px-3 " to="#">
                  {" "}
                  تسجيل الدخول
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
