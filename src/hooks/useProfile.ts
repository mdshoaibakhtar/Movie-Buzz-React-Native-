import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { setProfileName } from "../store/slices/profileSlice";

export function useProfile() {
  const dispatch = useDispatch<AppDispatch>();
  const name = useSelector((state: RootState) => state.profile.name);

  const updateName = (newName: string) => {
    dispatch(setProfileName(newName));
  };

  return { name, updateName };
}
