import api from "./axios-interceptor";

export const getYoungAdultsContent = async () => {
  try {
    const res = await api.get("/ministry-page/youth-page");
    return res.data;
  } catch (error) {
    return error;
  }
};
