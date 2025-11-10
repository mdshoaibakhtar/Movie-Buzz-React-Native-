import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string;
}

const initialState: ProfileState = {
  name: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setProfileName } = profileSlice.actions;
export default profileSlice.reducer;
