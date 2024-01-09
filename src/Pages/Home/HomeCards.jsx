import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const HomeCards = ({ title, description, linkDestination }) => {
  return (
    <div className="p-12 lg:p-16 border border-gray-900 rounded-5xl">
      <h2 className="mb-6 text-5xl  tracking-5xl">{title}</h2>
      <p className="mb-24 lg:mb-56 text-lg  text-opacity-60">{description}</p>
      <Link
        to={linkDestination}
        className="mr-3.5  font-medium underline group inline-flex items-center"
      >
        Learn more
        <ArrowForwardIosIcon className="transform group-hover:rotate-90 transition duration-300" />
      </Link>
    </div>
  );
};
