import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const HomeCards = ({ title, description, linkDestination }) => {
  return (
    <div className="p-6 lg:p-8 border border-gray-900 rounded-md">
      <h2 className="mb-6 text-3xl  tracking-5xl">{title}</h2>
      <p className="mb-16 text-lg text-opacity-60">{description}</p>
      <Link
        to={linkDestination}
        className="mr-3.5  font-medium underline group inline-flex items-center"
      >
        Learn more
        <ArrowForwardIosIcon className="transform group-hover:rotate-90 transition grid place-items-center ease-in-out duration-1000" />
      </Link>
    </div>
  );
};
