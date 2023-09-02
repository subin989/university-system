import React from "react";
import DiscussionForm from "./DiscussionForm";

const StudyAbroadDiscussion = () => {
  return (
    <div className="p-8 bg-blue-50">
      <div className="text-center mb-4">
        <h2 id="discussion-forum" className="text-2xl font-semibold">
          Discussion Forum
        </h2>
      </div>
      <DiscussionForm />
    </div>
  );
};

export default StudyAbroadDiscussion;
