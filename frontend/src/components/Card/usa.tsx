import React from "react";
import Link from "next/link";

const CardUSA = () => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-1/2 p-6 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/9407525/pexels-photo-9407525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Study in USA"
          className="max-w-full h-74 rounded-md"
        />
      </div>
      <div className="w-1/2 p-6">
        <h2 className="text-xl font-semibold mb-4">Study in the USA</h2>
        <p className="text-gray-600">
          The United States is a top choice for international students seeking
          world-class education and diverse cultural experiences. Studying in
          the USA offers a wide range of academic opportunities and a chance to
          immerse yourself in a dynamic and innovative learning environment.
        </p>
        <h3 className="text-lg font-semibold mt-4">Procedure to Apply:</h3>
        <ul className="list-decimal pl-8 py-2 text-gray-700">
          <li className="mb-2">
            <span className="font-semibold">
              Choose a University and Program:
            </span>{" "}
            Research and select a university and academic program that aligns
            with your interests and goals.
          </li>
          <li className="mb-2">
            <span className="font-semibold">
              Review Admission Requirements:
            </span>{" "}
            Check the admission criteria, test scores, and language proficiency
            requirements.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Complete Application:</span> Submit
            your online application and provide necessary documents, including
            transcripts and letters of recommendation.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Receive Acceptance Letter:</span>{" "}
            Once accepted, you'll receive an acceptance letter from the
            university.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Apply for Student Visa:</span> Apply
            for a U.S. student visa to study in the United States.
          </li>
          <li className="mb-2">
            <span className="font-semibold">
              Plan Accommodation and Arrival:
            </span>{" "}
            Arrange housing and prepare for your journey to the USA.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Attend Orientation:</span> Attend
            university orientation sessions to get familiar with campus life.
          </li>
          <li>
            <span className="font-semibold">Begin Your Academic Journey:</span>{" "}
            Start your studies and embrace the opportunities available in the
            USA!
          </li>
        </ul>
        <div className="text-right mt-4">
          <Link
            href="/usa"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardUSA;
