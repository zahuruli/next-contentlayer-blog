// pages/about.js
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex  justify-center">
      <div className="bg-gray-500 h-3/4 p-8 rounded-md shadow-md w-2/4 mt-52">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          About Me
        </h1>
        <hr className="my-4" />
        <p className="text-gray-100 text-center">
          Welcome to my about page! This is Md. Zahurul islam .A Fullstack
          Software Developer , Work at{" "}
          <Link
            href={"https://basis.org.bd/company-profile/20-03-830"}
            className="underline"
            target="_blank"
          >
            Merinasoft ltd.
          </Link>{" "}
          Dhaka.
        </p>
      </div>
    </div>
  );
};

export default About;
