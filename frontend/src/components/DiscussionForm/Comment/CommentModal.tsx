// CommentModal.js
import React, { useEffect, useState } from "react";
import { Modal, Input, Button, message } from "antd";
import { axiosBackend } from "utils/axios";

const CommentModal = ({
  isVisible,
  handleClose,
  questionId,
  fetchQuestions,
}) => {
  const [commentText, setCommentText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleCommentSubmit = async () => {
    if (commentText.trim() === "") {
      return;
    }

    try {
      setIsSaving(true);
      await axiosBackend.post(`api/faqs/${questionId}/comments/`, {
        content: commentText,
      });
      setCommentText(""); // Clear the input field
      fetchQuestions(); // Update the list of questions
      setIsSaving(false);
      message.success("Comment added successfully!");

      // Delay closing the modal to give time for the success message to display
      setTimeout(() => {
        handleClose(); // Close the modal after success
      }, 1000); // Adjust the time as needed
    } catch (error) {
      console.error("Error adding comment:", error);
      setIsSaving(false);
      message.error("Error adding comment. Please try again.");
    }
  };

  return (
    <Modal
      title="Add Comment"
      visible={isVisible}
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button
          className="bg-blue-500"
          key="submit"
          type="primary"
          onClick={handleCommentSubmit}
          loading={isSaving}
        >
          Add Comment
        </Button>,
      ]}
    >
      <Input
        placeholder="Enter your comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
    </Modal>
  );
};

export default CommentModal;
