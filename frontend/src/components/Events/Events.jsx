import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Collapse,
  message,
} from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import axios from "axios"; // Import axios library for API calls
import { axiosBackend } from "utils/axios";
import moment from "moment";

const { Panel } = Collapse;

const EventsSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axiosBackend.get("/api/events/");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleAddEvent = () => {
    setIsModalVisible(true);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
    form.setFieldsValue({
      title: event.title,
      date: moment(event.date),
      time: moment(event.start_time, "HH:mm"),
      endTime: moment(event.end_time, "HH:mm"),
      location: event.location,
    });
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axiosBackend.delete(`/api/events/${eventId}/`);
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
      message.success("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      message.error("Error deleting event. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setSelectedEvent(null);
  };

  const handleFormSubmit = async (values) => {
    try {
      if (selectedEvent) {
        // Handle edit event
        await axiosBackend.put(`/api/events/${selectedEvent.id}/`, {
          title: values.title,
          date: values.date.format("YYYY-MM-DD"),
          start_time: values.time.format("HH:mm"),
          end_time: values.endTime.format("HH:mm"),
          location: values.location,
        });
        const updatedEvents = events.map((event) =>
          event.id === selectedEvent.id ? { ...event, ...values } : event
        );
        setEvents(updatedEvents);
      } else {
        // Handle add event
        const response = await axiosBackend.post("/api/events/create/", {
          title: values.title,
          date: values.date.format("YYYY-MM-DD"),
          start_time: values.time.format("HH:mm"),
          end_time: values.endTime.format("HH:mm"),
          location: values.location,
        });
        setEvents([...events, response.data]);
      }
      form.resetFields();
      setIsModalVisible(false);
      message.success("Event saved successfully!");
    } catch (error) {
      console.error("Error adding/editing event:", error);
      message.error("Error adding/editing event. Please try again.");
    }
  };

  return (
    <div id="events" className="bg-gray-100 py-8 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <Button
          type="primary"
          onClick={handleAddEvent}
          icon={<PlusOutlined />}
          className="mb-4 border border-blue-500 text-blue-500 hover:border-blue-500 hover:text-blue-500"
        >
          Add Event
        </Button>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          {events.map((event) => (
            <Card
              key={event.id}
              className="bg-white border rounded-lg shadow-md p-4 mx-auto text-center max-w-xs"
            >
              <h3 className="text-lg font-semibold mb-2">
                <span className="mr-2">Title:</span>
                {event.title}
              </h3>
              <div className="flex items-center justify-center mb-2">
                {/* <CalendarOutlined className="mr-2 custom-icon-margin" /> */}
                <span>
                  Event Date: {moment(event.date).format("YYYY-MM-DD")}
                </span>
              </div>

              <div className="flex items-center justify-center mb-2">
                {/* <ClockCircleOutlined className="mr-2 custom-icon-margin" /> */}
                <span>Start Time: {event.start_time}</span>
              </div>
              <div className="flex items-center justify-center mb-2">
                {/* <ClockCircleOutlined className="mr-2 custom-icon-margin" /> */}
                <span className="mr-3">End Time: {event.end_time}</span>
              </div>
              <div className="mb-2">Location: {event.location}</div>
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => handleEditEvent(event)}
                className="mr-2 bg-blue-500"
              >
                Edit
              </Button>
              <Button
                type="danger"
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteEvent(event.id)}
                className="mr-2 bg-red-500 text-white"
              >
                Delete
              </Button>
            </Card>
          ))}
        </div>
        <Modal
          title={selectedEvent ? "Edit Event" : "Add New Event"}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button
              className="border border-blue-500 text-blue-500 hover:border-blue-500 hover:text-blue-500"
              key="submit"
              type="primary"
              onClick={() => form.submit()}
            >
              {selectedEvent ? "Save Changes" : "Add Event"}
            </Button>,
          ]}
        >
          <Form form={form} onFinish={handleFormSubmit}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter event title" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Please select event date" }]}
            >
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item
              name="time"
              label="Start Time"
              rules={[{ required: true, message: "Please select start time" }]}
            >
              <TimePicker format="HH:mm A" />
            </Form.Item>
            <Form.Item
              name="endTime"
              label="End Time"
              rules={[{ required: true, message: "Please select end time" }]}
            >
              <TimePicker format="HH:mm A" />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[
                { required: true, message: "Please enter event location" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default EventsSection;
