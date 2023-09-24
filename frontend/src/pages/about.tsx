import React from "react";
import Layout from "../layouts/Layout";
import { HistoryOutlined, AimOutlined, EyeOutlined } from "@ant-design/icons";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="mb-8">
        <img
          src="https://careerwise.co.za/wp-content/uploads/2021/03/University-Lecturre-Venue-scaled.jpg"
          alt="About Us"
          className="w-1/2 h-auto rounded-lg shadow-lg mx-auto mb-8"
        />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
            <HistoryOutlined
              style={{
                fontSize: "3rem",
                color: "#1890FF",
                marginBottom: "1rem",
              }}
            />
            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              gravida lorem, eu convallis felis. Vestibulum ut mi vitae justo
              tincidunt consectetur. Morbi non justo eu mi bibendum sagittis et
              in quam. Vestibulum vulputate dui ut nisl sagittis, in consequat
              eros lacinia.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
            <AimOutlined
              style={{
                fontSize: "3rem",
                color: "#52C41A",
                marginBottom: "1rem",
              }}
            />
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-lg mb-8">
              Phasellus efficitur tellus non urna tincidunt consequat. Proin
              cursus tristique nisl, et tempus nisl aliquam et. Sed condimentum,
              libero vel tempus hendrerit, metus est aliquet purus, eu porttitor
              elit augue eu nisl. Phasellus rhoncus fermentum elit, vel
              convallis turpis.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
            <EyeOutlined
              style={{
                fontSize: "3rem",
                color: "#722ED1",
                marginBottom: "1rem",
              }}
            />
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-lg">
              Duis non imperdiet neque. Vestibulum vehicula turpis eget sem
              laoreet, vel viverra augue pulvinar. Proin ac turpis a purus
              tristique fermentum. Suspendisse potenti. Sed in volutpat risus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutUs;
