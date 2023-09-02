import { axiosNext } from "../../../utils/axios"; // Assuming you have an authenticated axios instance
import { NextApiRequest, NextApiResponse } from "next";

type AddQuestionResponse = {
  question: string; // Change the type accordingly
};

export const addQuestionApi = async (
  data: string
): Promise<AddQuestionResponse> => {
  try {
    const response = await axiosNext.post("api/question/add", data);
    return response.data;
  } catch (error) {
    // @ts-ignore
    const { response } = error;

    if (response) {
      const { status, data } = response;
      throw new Error(JSON.stringify({ status, data }));
    }

    throw new Error("Internal Server Error");
  }
};
