import axios from "axios";
import { API_BASE_URL } from "./baseURL";
import { ITaskListModel } from "./models";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getTasks = async (): Promise<ITaskListModel> => {
  const response = await axiosInstance.get("tasks");
  const data: ITaskListModel = response.data;
  return data;
};
