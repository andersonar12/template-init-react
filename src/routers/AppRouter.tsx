import Swal from "sweetalert2";
import { FC, useContext } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import { Login } from "../views/Login/Login";
import { AuthContext } from "../context/AuthContext";
import { PrivateRoute } from "./PrivateRoute";

const PublicRoute: FC<any> = ({ user }) => {
  return user.logged ? <Navigate to="/home" /> : <Login />;
};

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<PublicRoute user={user} />} />
      <Route path="/main/*" element={<PrivateRoute user={user} />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
