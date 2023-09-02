import { axiosBackend } from "utils/axios";

// API calls for questions
export const addQuestionApi = async (questionData) => {
  try {
    const response = await axiosBackend.post("api/questions/", questionData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateQuestionApi = async (questionId, questionData) => {
  try {
    const response = await axiosBackend.put(
      `api/questions/${questionId}/`,
      questionData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteQuestionApi = async (questionId) => {
  try {
    const response = await axiosBackend.delete(`api/questions/${questionId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// API calls for comments
export const getCommentsApi = async (questionId) => {
  try {
    const response = await axiosBackend.get(
      `api/questions/${questionId}/comments/`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCommentApi = async (questionId, commentData) => {
  try {
    const response = await axiosBackend.post(
      `api/questions/${questionId}/comments/`,
      commentData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCommentApi = async (questionId, commentId, commentData) => {
  try {
    const response = await axiosBackend.put(
      `api/questions/${questionId}/comments/${commentId}/`,
      commentData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCommentApi = async (questionId, commentId) => {
  try {
    const response = await axiosBackend.delete(
      `api/questions/${questionId}/comments/${commentId}/`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
