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
    name: "University of Melbourne",
    logo: "https://images.shiksha.com/mediadata/images/1539748284phpkXrez1.jpeg",
    website: "https://www.unimelb.edu.au/",
    feeStructure: "$20,000 - $30,000",
    location: "Melbourne, VIC",
    acceptanceRate: "25%",
    reviewPercent: "92%",
  },
  {
    key: "2",
    name: "University of Sydney",
    logo: "https://images2.content-hci.com/commimg/video/CH/myhc_279666.jpg",
    website: "https://www.sydney.edu.au/",
    feeStructure: "$25,000 - $35,000",
    location: "Sydney, NSW",
    acceptanceRate: "20%",
    reviewPercent: "90%",
  },
  {
    key: "3",
    name: "Australian National University",
    logo: "https://img.emg-services.net/institutes/institute29688/anu-header.jpg",
    website: "https://www.anu.edu.au/",
    feeStructure: "$22,000 - $32,000",
    location: "Canberra, ACT",
    acceptanceRate: "30%",
    reviewPercent: "88%",
  },
  {
    key: "4",
    name: "University of Queensland",
    logo: "https://images.shiksha.com/mediadata/images/1575364977phprol8xE.jpeg",
    website: "https://www.uq.edu.au/",
    feeStructure: "$18,000 - $28,000",
    location: "Brisbane, QLD",
    acceptanceRate: "28%",
    reviewPercent: "91%",
  },
  {
    key: "5",
    name: "University of New South Wales",
    logo: "https://teanabroad.org/wp-content/uploads/2018/04/UNSW-Media-8-min.jpg",
    website: "https://www.unsw.edu.au/",
    feeStructure: "$24,000 - $34,000",
    location: "Sydney, NSW",
    acceptanceRate: "22%",
    reviewPercent: "89%",
  },
];

const TopUniversitiesAustralia = () => {
  const dataSource = topUniversitiesData.map((university) => ({
    ...university,
    key: university.key.toString(),
  }));

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">
        Top Universities in Australia
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

export default TopUniversitiesAustralia;
