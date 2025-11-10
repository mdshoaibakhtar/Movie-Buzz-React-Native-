import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useFormData = () => {
  return useSelector((state: RootState) => state.form);
};
