import { useEffect, useState } from "react";
import { FormState } from "../components/Form";
import { LOCAL_STORAGE_SITEDATA_KEY } from "../utils/constants";

export const useLocalFormState = (formState: FormState | null) => {
  const [localFormState, setLocalFormState] = useState(formState);

  useEffect(() => {
    if (formState === null) {
      setLocalFormState(getLocalFormState());
    }
  }, []);

  useEffect(() => {
    saveLocalFormState(localFormState);
  }, [localFormState]);

  const getLocalFormState = () => {
    const formState = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_SITEDATA_KEY)
    );
    return formState ?? {};
  };

  const saveLocalFormState = (formState: FormState) => {
    localStorage.setItem(LOCAL_STORAGE_SITEDATA_KEY, JSON.stringify(formState));
  };

  return { localFormState, setLocalFormState };
};
