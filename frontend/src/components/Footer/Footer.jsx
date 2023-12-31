// components/Footer.js

import React from "react";
import {
  GithubOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-black p-6 text-white text-center">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 text-lg font-bold">University Search</div>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com">
              <GithubOutlined style={{ fontSize: "24px", color: "white" }} />
            </a>
            <a href="https://twitter.com">
              <TwitterOutlined style={{ fontSize: "24px", color: "white" }} />
            </a>
            <a href="https://facebook.com">
              <FacebookOutlined style={{ fontSize: "24px", color: "white" }} />
            </a>
          </div>
          <div className="mt-4 text-sm">
            &copy; 2023 University Search. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
