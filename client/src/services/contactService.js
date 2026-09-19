import api from "./api";

export const requestContactVerification = async (data) => {
  const response = await api.post(
    "/contact/request",
    data
  );

  return response.data;
};

export const verifyContact = async (data) => {
  const response = await api.post(
    "/contact/verify",
    data
  );

  return response.data;
};