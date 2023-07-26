import axios from "axios";
import { FormState } from "../components/Form";
import { API_SITEDATA_ENDPOINT } from "../utils/constants";

const api = axios.create({
  baseURL: "/api/",
});

export const persistFormState = async (formState: FormState) => {
  return await api.post(API_SITEDATA_ENDPOINT, formState);
};

export const fetchFormState = async () => {
  return await api.get<FormState>(API_SITEDATA_ENDPOINT);
};

export default api;
