// commentApi.js
import { axiosBackend } from "utils/axios";

export const fetchCommentsForQuestion = async (questionId) => {
  try {
    const response = await axiosBackend.get(`api/discussions/${questionId}/comments/`);
    console.log("esonse os ", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
