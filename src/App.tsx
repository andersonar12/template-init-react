import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, initialState, TContextState, User } from "./context/AuthContext";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./redux/store";
function App() {
  const [user, dispatch] = useState(initialState.user);

  const setUser = (user: User) => dispatch(user);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthContext.Provider value={{ user, setUser }}>
          {/* user y el dispatch se distribuiran en el AuthContext  */}
          <AppRouter />
        </AuthContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
