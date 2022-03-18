import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { Home } from "../views/Home/Home";
import { Page1 } from "../views/Page1/Page1";
import { Page2 } from "../views/Page2/Page2";

export const PrivateRoute: FC<any> = ({ user }) => {
  if (!user.logged) {
    Swal.fire({
      icon: "error",
      title: "Acceso no Autorizado",
      text: "Debes iniciar sesion en la plataforma!",
    });
    return <Navigate to="/" />; //Si no esta logueado redirige al usuario al login
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </>
  );
};
