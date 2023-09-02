// QuestionForm.js
import React from "react";
import { Form, Input, Button } from "antd";

const QuestionForm = ({ newQuestion, handleFormSubmit, setNewQuestion }) => {
  return (
    <Form className="mt-4">
      <Form.Item
        name="question"
        label="Question"
        rules={[{ required: true, message: "Please enter a question" }]}
      >
        <Input
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={handleFormSubmit}
          className="border border-blue-500 text-blue-500 hover:border-blue-500 hover:text-blue-500"
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QuestionForm;
