import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  name: string;
  email: string;
  mobile: string;
  address?: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  mobile: "",
  address: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormData: (state, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;
