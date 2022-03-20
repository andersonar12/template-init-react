import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/global-interfaces";

export const initialUserState: User = {
    name: "",
    logged: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        createUser: (state, action) => action.payload,
        //se manda un objeto {...state->lo que ya tenemos en el estado, ...action.payload->reemplazara las propiedades que ya vienen en el payload}
        modifyUser: (state, action) => ({ ...state, ...action.payload }),
        resetUser: () => initialUserState,
    },
});

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
