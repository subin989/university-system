import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Slider,
  Button,
  message,
  Modal,
  Select,
} from "antd";
import { StarOutlined, DollarOutlined } from "@ant-design/icons";
import axios from "axios";
import { axiosBackend } from "utils/axios";

const UniversityRecommendation = () => {
  const [form] = Form.useForm();
  const [recommendations, setRecommendations] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const countries = [
    { value: "AU", label: "Australia" },
    { value: "USA", label: "United States of America" },
  ];

  const handleRecommend = async (values) => {
    try {
      const response = await axiosBackend.get("/api/recommendation/", {
        params: {
          fee: parseFloat(values.fee),
          acceptanceRate: values.acceptanceRate,
          scholarship: values.scholarship,
          country: values.country,
          state: values.state,
        },
      });

      setRecommendations(response.data);
    } catch (error) {
      console.error("Error fetching university recommendations:", error);
      message.error(
        "Error fetching university recommendations. Please try again."
      );
    }
  };

  const handleAddUniversity = () => {
    setIsAddModalVisible(true);
  };

  const handleAddUniversitySubmit = async (values) => {
    try {
      await axiosBackend.post("/api/recommendation/", {
        name: values.name,
        fee: parseFloat(values.fee),
        acceptance_rate: parseFloat(values.acceptanceRate),
        scholarship: parseFloat(values.scholarship),
        rating: parseFloat(values.rating),
        country: values.country,
        state: values.state,
      });

      message.success("University added successfully!");
      setIsAddModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error("Error adding university:", error);
      message.error("Error adding university. Please try again.");
    }
  };

  return (
    <div
      id="university-recommendation-system"
      className="mx-auto px-4 py-8 max-w-screen-xl"
    >
      <h3 className="text-2xl font-bold mb-8 text-center">
        University Recommendation
      </h3>
      <Form form={form} onFinish={handleRecommend} layout="vertical">
        <Form.Item
          label="Maximum Fee ($)"
          name="fee"
          rules={[{ required: true, message: "Please enter maximum fee" }]}
        >
          <Input type="number" prefix={<DollarOutlined />} />
        </Form.Item>
        <Form.Item
          label="Minimum Acceptance Rate (%)"
          name="acceptanceRate"
          rules={[
            { required: true, message: "Please enter minimum acceptance rate" },
          ]}
        >
          <Slider
            range
            marks={{ 0: "0%", 100: "100%" }}
            tipFormatter={(value) => `${value}%`}
          />
        </Form.Item>
        <Form.Item
          label="Minimum Scholarship (%)"
          name="scholarship"
          rules={[
            { required: true, message: "Please enter minimum scholarship" },
          ]}
        >
          <Slider
            range
            marks={{ 0: "0%", 100: "100%" }}
            tipFormatter={(value) => `${value}%`}
          />
        </Form.Item>
        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select country" }]}
        >
          <Select placeholder="Select country" options={countries} />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true, message: "Please enter state" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            className="border border-blue-500 text-blue-500 hover:border-blue-500 hover:text-blue-500"
            type="primary"
            htmlType="submit"
          >
            Recommend Universities
          </Button>
        </Form.Item>
      </Form>
      <Button
        className="border border-blue-500 text-blue-500 hover:border-blue-500 hover:text-blue-500"
        onClick={handleAddUniversity}
      >
        Add University
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((university, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <h3 className="text-lg font-semibold">{university.name}</h3>
            <div className="mt-4">
              <p>
                <StarOutlined /> Rating: {university.rating}
              </p>
              <p>
                <DollarOutlined /> Fee: ${university.fee}
              </p>
              <p>Acceptance Rate: {university.acceptance_rate}%</p>
              <p>Scholarship: {university.scholarship}%</p>
              <p>Country: {university.country}</p>
              <p>State: {university.state}</p>
            </div>
          </Card>
        ))}
      </div>
      <Modal
        title="Add University"
        visible={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsAddModalVisible(false)}>
            Cancel
          </Button>,
          <Button
            className="mb-4 border border-blue-500 text-blue-500 hover:border-blue-500 hover:text-blue-500"
            key="submit"
            onClick={() => form.submit()}
          >
            Add University
          </Button>,
        ]}
      >
        <Form
          form={form}
          onFinish={handleAddUniversitySubmit}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter university name" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Fee ($)"
            name="fee"
            rules={[{ required: true, message: "Please enter university fee" }]}
          >
            <Input type="number" prefix={<DollarOutlined />} />
          </Form.Item>
          <Form.Item
            label="Acceptance Rate (%)"
            name="acceptanceRate"
            rules={[
              { required: true, message: "Please enter acceptance rate" },
            ]}
          >
            <Slider
              marks={{ 0: "0%", 100: "100%" }}
              tipFormatter={(value) => `${value}%`}
            />
          </Form.Item>
          <Form.Item
            label="Scholarship (%)"
            name="scholarship"
            rules={[{ required: true, message: "Please enter scholarship" }]}
          >
            <Slider
              marks={{ 0: "0%", 100: "100%" }}
              tipFormatter={(value) => `${value}%`}
            />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              { required: true, message: "Please enter university rating" },
            ]}
          >
            <Input type="number" prefix={<StarOutlined />} />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please select country" }]}
          >
            <Select placeholder="Select country" options={countries} />
          </Form.Item>
          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: "Please enter state" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UniversityRecommendation;
