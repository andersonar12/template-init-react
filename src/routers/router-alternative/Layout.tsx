import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export function Layout() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
