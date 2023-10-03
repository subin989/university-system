import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "University",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <a
        href={record.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <img src={record.logo} alt={text} className="w-1/2 h-auto mr-4" />

        <span>{text}</span>
      </a>
    ),
  },
  {
    title: "Fee Structure",
    dataIndex: "feeStructure",
    key: "feeStructure",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Acceptance Rate",
    dataIndex: "acceptanceRate",
    key: "acceptanceRate",
  },
  {
    title: "Review Percent",
    dataIndex: "reviewPercent",
    key: "reviewPercent",
  },
];

const topUniversitiesData = [
  {
    key: "1",
    name: "Harvard University",
    logo: "https://d3vgmmrg377kge.cloudfront.net/about/PublishingImages/campus-donors/hbs_aerial_shot_philanthroopy_home_640x360.jpg",
    website: "https://www.harvard.edu/",
    feeStructure: "$50,000 - $60,000",
    location: "Cambridge, MA",
    acceptanceRate: "5%",
    reviewPercent: "95%",
  },
  {
    key: "2",
    name: "Stanford University",
    logo: "https://media.cnn.com/api/v1/images/stellar/prod/221102021511-01-stanford-university-reviews-dorm-safety-procedures.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp",
    website: "https://www.stanford.edu/",
    feeStructure: "$55,000 - $65,000",
    location: "Stanford, CA",
    acceptanceRate: "4%",
    reviewPercent: "92%",
  },
  {
    key: "3",
    name: "Massachusetts Institute of Technology",
    logo: "https://cdn.britannica.com/17/100117-050-EA32F934/Massachusetts-Institute-of-Technology-Cambridge.jpg",
    website: "https://www.mit.edu/",
    feeStructure: "$48,000 - $58,000",
    location: "Cambridge, MA",
    acceptanceRate: "7%",
    reviewPercent: "90%",
  },
  {
    key: "4",
    name: "California Institute of Technology",
    logo: "https://www.usnews.com/dims4/USNEWS/a1262a7/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F36%2Fb2a8b47dd2d1a501ad2f9a8338118e%2Fcollege-photo_34898.jpg",
    website: "https://www.caltech.edu/",
    feeStructure: "$52,000 - $62,000",
    location: "Pasadena, CA",
    acceptanceRate: "6%",
    reviewPercent: "88%",
  },

  {
    key: "10",
    name: "Johns Hopkins University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyE8qhUVoI2-XtJ4S0On5v12JkT-Nq-gFWwy1E0gOlWqZjgntl1tFhX9VWhbR3Uyaozc&usqp=CAU",
    website: "https://www.jhu.edu/",
    feeStructure: "$51,000 - $61,000",
    location: "Baltimore, MD",
    acceptanceRate: "9%",
    reviewPercent: "85%",
  },
];

const TopUniversitiesUSA = () => {
  const dataSource = topUniversitiesData.map((university) => ({
    ...university,
    key: university.key.toString(),
  }));

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Top Universities in the USA
      </h2>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default TopUniversitiesUSA;
