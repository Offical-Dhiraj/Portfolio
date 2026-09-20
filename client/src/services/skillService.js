import api from "./api";

export const getSkills = async () => {
  const response = await api.get("/skills");

  console.log("Skills API response:", response.data);

  return response.data;
};