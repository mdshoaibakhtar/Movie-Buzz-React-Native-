import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import profileReducer from "./slices/profileSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
