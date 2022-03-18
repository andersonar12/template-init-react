import Swal from "sweetalert2";
import { FC, useContext } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import { Login } from "../../views/Login/Login";
import { AuthContext } from "../../context/AuthContext";

import { Page1 } from "../../views/Page1/Page1";
import { Page2 } from "../../views/Page2/Page2";
import { Home } from "../../views/Home/Home";
import { Layout } from "./Layout";

const PrivateRoute: FC<any> = ({ user }) => {
  if (!user.logged) {
    Swal.fire({
      icon: "error",
      title: "Acceso no Autorizado",
      text: "Debes iniciar sesion en la plataforma!",
    });
    return <Navigate to="/" />; //Si no esta logueado redirige al usuario al login
  }

  return <Layout />;
};

const PublicRoute: FC<any> = ({ user }) => {
  return user.logged ? <Navigate to="/home" /> : <Login />;
};

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/*" element={<Outlet />}>
        <Route index element={<PublicRoute user={user} />} />
        <Route path="home" element={<PrivateRoute user={user} />}>
          <Route index element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>

        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
};
