import { Link } from "react-router-dom";
import { useSharedCounter } from "../../hooks/useSharedCounter";
import { HomeRouter } from "./HomeRouter";
export const Home = () => {
  //CustomHook para compartir un useState() entre 2 o mas componentes
  const { count } = useSharedCounter();

  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <ul>
        <li>
          <Link to={"/main/home/subpage1"}>Subpage1</Link>
        </li>
        <li>
          <Link to={"/main/home/subpage2"}>Subpage2</Link>
        </li>
      </ul>
      <hr />
      <HomeRouter />
    </div>
  );
};
