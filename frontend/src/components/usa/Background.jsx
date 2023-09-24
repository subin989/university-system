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
        <img
          src={record.logo}
          alt={text}
          className="h-16 w-16 mr-2 object-contain"
        />
        {text}
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
    logo: "https://www.harvard.edu/sites/default/files/harvard_university_logo.png",
    website: "https://www.harvard.edu/",
    feeStructure: "$50,000 - $60,000",
    location: "Cambridge, MA",
    acceptanceRate: "5%",
    reviewPercent: "95%",
  },
  {
    key: "2",
    name: "Stanford University",
    logo: "https://www.stanford.edu/static/apple-touch/wax_180.png",
    website: "https://www.stanford.edu/",
    feeStructure: "$55,000 - $65,000",
    location: "Stanford, CA",
    acceptanceRate: "4%",
    reviewPercent: "92%",
  },
  {
    key: "3",
    name: "Massachusetts Institute of Technology",
    logo: "https://www.mit.edu/sites/default/files/images/apple-touch-icon.png",
    website: "https://www.mit.edu/",
    feeStructure: "$48,000 - $58,000",
    location: "Cambridge, MA",
    acceptanceRate: "7%",
    reviewPercent: "90%",
  },
  {
    key: "4",
    name: "California Institute of Technology",
    logo: "https://www.caltech.edu/themes/custom/caltech/assets/img/apple-touch-icon-180x180.png",
    website: "https://www.caltech.edu/",
    feeStructure: "$52,000 - $62,000",
    location: "Pasadena, CA",
    acceptanceRate: "6%",
    reviewPercent: "88%",
  },
  {
    key: "5",
    name: "Princeton University",
    logo: "https://www.princeton.edu/sites/default/themes/ptw/apple-touch-icon-180x180.png",
    website: "https://www.princeton.edu/",
    feeStructure: "$49,000 - $59,000",
    location: "Princeton, NJ",
    acceptanceRate: "6%",
    reviewPercent: "91%",
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
