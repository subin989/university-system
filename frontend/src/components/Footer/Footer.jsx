import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-white">Follow Us:</span>
          <a href="#" className="text-white">
            <FacebookOutlined />
          </a>
          <a href="#" className="text-white">
            <TwitterOutlined />
          </a>
          <a href="#" className="text-white">
            <InstagramOutlined />
          </a>
        </div>
        <div className="text-white">
          © 2023 Study Abroad Portal. All rights reserved.
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
