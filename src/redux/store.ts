import { configureStore } from "@reduxjs/toolkit";
import { User } from "interfaces/global-interfaces";
import { userSlice } from "./states/user.state";

//Interface para el state global de la aplicacion
export interface AppStore {
    user: User,
    //Key nuevo del estado para que sea escalable el state con Redux
}
export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer,
        // añadira el nuevo reducer que se vaya creando
    }
})