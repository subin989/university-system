// EditQuestionModal.js
import React from "react";
import { Modal, Input } from "antd";

const EditQuestionModal = ({
  isEditModalVisible,
  handleEditModalCancel,
  handleEditModalSave,
  editedQuestion,
  setEditedQuestion,
}) => {


  return (
    <Modal
      title="Edit Question"
      visible={isEditModalVisible}
      onCancel={handleEditModalCancel}
      onOk={handleEditModalSave}
      okButtonProps={{ className: "bg-blue-500" }}
    >
      <Input
        value={editedQuestion}
        onChange={(e) => setEditedQuestion(e.target.value)}
      />
    </Modal>
  );
};

export default EditQuestionModal;
