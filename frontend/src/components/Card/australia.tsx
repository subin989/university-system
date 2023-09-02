import React from "react";
import Link from "next/link";

const CardAustralia = () => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-1/2 p-6">
        <h2 className="text-xl font-semibold mb-4">Study in Australia</h2>
        <p className="text-gray-600">
          Australia is a popular destination for international students due to
          its high-quality education, diverse culture, and vibrant cities.
          Pursuing higher education in Australia offers a unique opportunity to
          experience a world-class learning environment while exploring a
          beautiful and welcoming country.
        </p>
        <h3 className="text-lg font-semibold mt-4">Procedure to Apply:</h3>
        <ul className="list-decimal pl-8 py-2 text-gray-700">
          <li className="mb-2">
            <span className="font-semibold">
              Choose a Course and Institution:
            </span>{" "}
            Research and select a program and institution that matches your
            academic and career goals.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Check Admission Requirements:</span>{" "}
            Review the admission criteria and language proficiency requirements
            for the chosen course.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Submit Application:</span> Complete
            the online application form and provide all required documents.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Receive Offer Letter:</span> Once
            accepted, you'll receive an offer letter from the institution.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Apply for Student Visa:</span> Apply
            for a student visa to study in Australia.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Arrange Accommodation:</span> Plan
            your accommodation and arrival in Australia.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Prepare for Departure:</span> Attend
            pre-departure orientations and prepare for your journey.
          </li>
          <li>
            <span className="font-semibold">Arrive in Australia:</span> Start
            your exciting journey as an international student in Australia!
          </li>
        </ul>
        <Link
          href="/australia"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          More Details
        </Link>
      </div>
      <div className="w-1/2 p-6 flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/1766215/pexels-photo-1766215.jpeg"
          alt="Study in Australia"
          className="max-w-full h-74 rounded-md"
        />
      </div>
    </div>
  );
};

export default CardAustralia;
