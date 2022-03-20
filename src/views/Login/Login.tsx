import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "redux/states/user.state";
import { AuthContext } from "../../context/AuthContext";
import { AppStore } from "../../redux/store";

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const userState = useSelector((store: AppStore) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userState);
  }, [userState]);

  const loginUser = () => {
    setUser({ name: "Anderson", logged: true });

    navigate("/main/home");
  };

  const registerUser = () => {
    dispatch(createUser({ user: "Anderson", logged: true }));
  };
  return (
    <div className="text-center ">
      <h1>Login</h1>
      <button onClick={() => loginUser()} className="btn btn-primary">
        Iniciar
      </button>
      <br />
      <h4 className="mt-4">Para modificar el state con Redux(prueba)</h4>
      <button onClick={() => registerUser()} className="btn btn-outline-secondary">
        Crear Usuario
      </button>
    </div>
  );
};
