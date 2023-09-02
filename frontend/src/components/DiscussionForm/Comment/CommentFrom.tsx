// CommentForm.js
import React, { useState } from "react";
import { Input, Button } from "antd";

const CommentForm = ({ handleAddComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleFormSubmit = () => {
    handleAddComment(commentText);
    setCommentText("");
  };

  return (
    <div>
      <Input
        placeholder="Add a comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <Button type="primary" onClick={handleFormSubmit}>
        Add Comment
      </Button>
    </div>
  );
};

export default CommentForm;
