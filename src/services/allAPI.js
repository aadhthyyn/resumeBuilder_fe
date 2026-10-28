import axiosConfig from "./AxiosConfig";
import { BASEURL } from "./BaseURL";

export const addResume = async (reqBody) => {
  return await axiosConfig("post", `${BASEURL}/resumeData`, reqBody);
};

export const getResume = async () => {
  return await axiosConfig("get", `${BASEURL}/resumeData`);
};
export const deleteResume = async (id) => {
  return await axiosConfig("delete", `${BASEURL}/resumeData/${id}`, "");
};
export const getSingleResume = async (id) => {
  return await axiosConfig("get", `${BASEURL}/resumeData/${id}`, "");
};
export const updateResume =async (id,reqBody)=>{
  return await axiosConfig('put',`${BASEURL}/resumeData/${id}`, reqBody)

}
