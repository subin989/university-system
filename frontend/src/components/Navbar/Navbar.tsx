import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AccountCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { PATH_USER } from "../../routes/paths";
import { RocketOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="p-4 static bg-blue-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">
            <strong>CYS</strong>
          </div>
        </div>
        <div className="flex space-x-4">
          <ul className="ml-8 space-x-6 flex items-center text-base text-black">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#applying-country" className="hover:text-blue-500">
                Applying Country
              </Link>
            </li>
            <li>
              <Link
                href="#university-recommendation-system"
                className="hover:text-blue-500"
              >
                University Recommendation System
              </Link>
            </li>
            <li>
              <Link href="#discussion-forum" className="hover:text-blue-500">
                Discussion Forum
              </Link>
            </li>
            <li>
              <Link href="#events" className="hover:text-blue-500">
                Events
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <IconButton
          className="text-blue-500"
          size="large"
          component={Link}
          href={PATH_USER.root}
          sx={{ p: 0 }}
        >
          <AccountCircle />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
