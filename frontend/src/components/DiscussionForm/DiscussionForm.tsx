// DiscussionForm.js
import React, { useState, useEffect } from "react";
import { Button, Modal, message } from "antd";

import { axiosBackend } from "utils/axios"; // Import utilities
import QuestionForm from "./Question/QuestionForm";
import QuestionList from "./Question/QuestionList";
import EditQuestionModal from "./Question/EditQuestionModal";
import CommentModal from "./Comment/CommentModal";
import { fetchCommentsForQuestion } from "./Comment/commentApi";

const DiscussionForm = () => {
  // State and functions for the main component
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [editedQuestion, setEditedQuestion] = useState("");
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [comment, setComment] = useState(""); // State for new comment
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  // Fetch questions on component mount
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axiosBackend.get("api/faqs/");
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleFormSubmit = async () => {
    if (newQuestion.trim() === "") {
      return;
    }

    try {
      await axiosBackend.post("api/faqs/", { question: newQuestion });
      setNewQuestion("");
      setIsFormVisible(false);
      fetchQuestions();
      message.success("Question added successfully!");
    } catch (error) {
      console.error("Error adding question:", error);
      message.error("Error adding question. Please try again.");
    }
  };

  const handleEditQuestion = (questionId) => {
    const questionToEdit = questions.find((q) => q.id === questionId);
    setIsEditModalVisible(true);
    setEditedQuestion(questionToEdit.question);
    setEditingQuestionId(questionId);
  };

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false);
    setEditedQuestion("");
    setEditingQuestionId(null);
  };

  const handleEditModalSave = async () => {
    try {
      await axiosBackend.put(`api/faqs/${editingQuestionId}/`, {
        question: editedQuestion,
      });
      message.success("Question updated successfully!");
      fetchQuestions();
    } catch (error) {
      console.error("Error editing question:", error);
      message.error("Error editing question. Please try again.");
    }
    setIsEditModalVisible(false);
    setEditedQuestion("");
    setEditingQuestionId(null);
  };

  const handleDeleteQuestion = async (questionId) => {
    try {
      await axiosBackend.delete(`api/faqs/${questionId}/`);
      message.success("Question deleted successfully!");
      fetchQuestions();
    } catch (error) {
      console.error("Error deleting question:", error);
      message.error("Error deleting question. Please try again.");
    }
  };

  const handleOpenCommentModal = (questionId) => {
    setCurrentQuestionId(questionId);
    setIsCommentModalVisible(true);
  };

  const handleCloseCommentModal = () => {
    setCurrentQuestionId(null);
    setIsCommentModalVisible(false);
  };
  return (
    <div>
      {/* Button to add a new question */}

      {/* Render the QuestionForm component when the form is visible */}
      {isFormVisible && (
        <QuestionForm
          newQuestion={newQuestion}
          handleFormSubmit={handleFormSubmit}
          setNewQuestion={setNewQuestion}
        />
      )}
      {/* Render the QuestionList component */}
      <QuestionList
        questions={questions}
        handleEditQuestion={handleEditQuestion}
        handleDeleteQuestion={handleDeleteQuestion}
        handleOpenCommentModal={handleOpenCommentModal}
        fetchQuestions={fetchQuestions}
      />
      {/* Render the EditQuestionModal component */}
      <EditQuestionModal
        isEditModalVisible={isEditModalVisible}
        handleEditModalCancel={handleEditModalCancel}
        handleEditModalSave={handleEditModalSave}
        editedQuestion={editedQuestion}
        setEditedQuestion={setEditedQuestion}
      />
      <CommentModal
        isVisible={isCommentModalVisible}
        handleClose={handleCloseCommentModal}
        questionId={currentQuestionId}
        fetchQuestions={fetchQuestions}
      />
      <Button
        type="primary"
        onClick={() => setIsFormVisible(true)}
        className={`mt-4 ${
          isFormVisible ? "hidden" : "block"
        } bg-green-500 border-green-500 text-black`}
        ghost
      >
        Add Question
      </Button>
    </div>
  );
};

export default DiscussionForm;
