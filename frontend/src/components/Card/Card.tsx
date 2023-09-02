import React from "react";
import CardAustralia from "./australia";
import CardUSA from "./usa";

const StudyDestination = () => {
  return (
    <div id="applying-country" className="mx-auto px-4 py-8 max-w-screen-xl">
      <h1 className="text-3xl font-bold mb-8 text-center relative pb-2">
        Study Destination
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-black mt-1"></div>
      </h1>
      <div className="space-y-8">
        <CardAustralia />
        <CardUSA />
      </div>
    </div>
  );
};

export default StudyDestination;
