import React from "react";
import { Link } from "react-router-dom";

export const HomeCards = ({ title, description, linkDestination, avatar }) => {
  return (
    <div className="p-6 lg:p-8 md:w-2/3 bg-teal-50 border border-green-900 rounded-md h-full">
      <div className="mx-auto w-2/5 md:w-1/3 place-items-center grid">
        <img src={avatar} alt="card-img" />
      </div>
      <h2 className="my-2 text-2xl font-semibold text-center  tracking-5xl">
        {title}
      </h2>
      <p className="mb-10 text-lg text-opacity-60">{description}</p>
      <Link
        to={linkDestination}
        className="mr-3.5 border-2 text-white hover:opacity-80 bg-green-600 border-white p-2 rounded-full font-medium grid place-items-center"
      >
        Learn more
      </Link>
    </div>
  );
};
