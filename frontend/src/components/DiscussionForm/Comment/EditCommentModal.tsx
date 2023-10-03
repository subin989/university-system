import React, { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { axiosBackend } from "utils/axios";

const EditCommentModal = ({
  isVisible,
  handleClose,
  comment,
  questionId,
  fetchQuestions,
}) => {
  const [form] = Form.useForm();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (values) => {
    try {
      setIsSaving(true);

      // Perform the API call to update the comment content
      await axiosBackend.put(
        `api/discussions/${questionId}/comments/${comment.id}/`,
        {
          content: values.content,
        }
      );

      message.success("Comment edited successfully!");
      setIsSaving(false);
      fetchQuestions();
      handleClose();
    } catch (error) {
      console.error("Error saving comment:", error);
      setIsSaving(false);
      message.error("Error editing comment. Please try again.");
    }
  };

  return (
    <Modal
      title="Edit Comment"
      visible={isVisible}
      onCancel={handleClose}
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Cancel
        </Button>,
        <Button
          key="save"
          type="primary"
          onClick={() => form.submit()}
          loading={isSaving}
          className="bg-blue-500"
        >
          Save
        </Button>,
      ]}
    >
      <Form
        form={form}
        initialValues={{ content: comment ? comment.content : "" }}
        onFinish={handleSave} // Handle form submission
      >
        <Form.Item
          label="Comment Content"
          name="content"
          rules={[{ required: true, message: "Please enter comment content" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCommentModal;
