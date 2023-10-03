import React, { useEffect, useState } from "react";
import { List, Button, Tooltip, message, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import EditCommentModal from "../Comment/EditCommentModal";
import { axiosBackend } from "utils/axios";

const QuestionList = ({
  questions,
  handleEditQuestion,
  handleDeleteQuestion,
  handleOpenCommentModal,
  fetchQuestions,
}) => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingComment, setEditingComment] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deletingComment, setDeletingComment] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditCommentClick = (questionId, commentId) => {
    const question = questions.find((q) => q.id === questionId);
    const commentToEdit = question.comments.find((c) => c.id === commentId);

    setEditingComment({ ...commentToEdit, questionId,commentId }); // Include questionId
    setEditModalVisible(true);
  };

  const handleDeleteCommentClick = (questionId, commentId) => {
    const question = questions.find((q) => q.id === questionId);
    const commentToDelete = question.comments.find((c) => c.id === commentId);

    setDeletingComment({ ...commentToDelete, questionId }); // Include questionId
    setDeleteModalVisible(true);
  };

  const handleEditCommentModalClose = () => {
    setEditModalVisible(false);
    setEditingComment(null);
  };

  const handleDeleteCommentModalClose = () => {
    setDeleteModalVisible(false);
    setDeletingComment(null);
  };
  const handleDeleteComment = async () => {
    if (!deletingComment) {
      return;
    }

    try {
      setIsDeleting(true);

      await axiosBackend.delete(
        `api/discussions/${deletingComment.questionId}/comments/${deletingComment.id}/`
      );
      fetchQuestions(); // Update the list of questions

      message.success("Comment deleted successfully!");
      setIsDeleting(false);
      setDeleteModalVisible(false);
    } catch (error) {
      console.error("Error deleting comment:", error);
      setIsDeleting(false);
      message.error("Error deleting comment. Please try again.");
    }
  };

  return (
    <div>
      <List
        dataSource={questions}
        renderItem={(question) => (
          <List.Item className="border p-4 mb-4 rounded-lg shadow-md">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold pl-5">
                  {question.question}
                </span>
                <div>
                  <Tooltip title="Edit">
                    <Button
                      type="link"
                      onClick={() => handleEditQuestion(question.id)}
                      icon={<EditOutlined />}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Button
                      type="link"
                      onClick={() => handleDeleteQuestion(question.id)}
                      icon={<DeleteOutlined />}
                    />
                  </Tooltip>
                  <Tooltip title="Comment">
                    <Button
                      type="link"
                      onClick={() => handleOpenCommentModal(question.id)}
                      icon={<CommentOutlined />}
                    />
                  </Tooltip>
                </div>
              </div>
              <div className="ml-8">
                {question.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border p-3 rounded-lg mb-2  bg-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-sm">{comment.content}</p>
                      <div>
                        <Tooltip title="Edit Comment">
                          <Button
                            type="link"
                            onClick={() =>
                              handleEditCommentClick(question.id, comment.id)
                            }
                            icon={<EditOutlined />}
                          />
                        </Tooltip>
                        <Tooltip title="Delete Comment">
                          <Button
                            type="link"
                            onClick={() =>
                              handleDeleteCommentClick(question.id, comment.id)
                            }
                            icon={<DeleteOutlined />}
                          />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </List.Item>
        )}
      />

      {/* Edit Comment Modal */}
      <EditCommentModal
        isVisible={editModalVisible}
        handleClose={handleEditCommentModalClose}
        comment={editingComment}
        questionId={editingComment ? editingComment.questionId : null}
        fetchQuestions={fetchQuestions}
      />
      {/* Delete Comment Modal */}
      {deletingComment && (
        <Modal
          title="Delete Comment"
          visible={deleteModalVisible}
          onCancel={handleDeleteCommentModalClose}
          onOk={handleDeleteComment} // Call the function to delete the comment
          confirmLoading={isDeleting}
          okButtonProps={{ className: "bg-blue-500" }}
        >
          <p>Are you sure you want to delete this comment?</p>
        </Modal>
      )}
    </div>
  );
};

export default QuestionList;
