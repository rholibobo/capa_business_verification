import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

export const HomeCards = ({ title, description, linkDestination, avatar }) => {
  return (
    <div className="p-3 lg:p-8 md:w-2/3 bg-teal-50 border border-green-900 rounded-md h-full">
      <div className="mx-auto w-2/5 md:w-1/3 place-items-center grid">
        <img src={avatar} alt="card-img" className="md:w-[120px]" />
      </div>
      <h2 className="my-2 text-2xl font-semibold text-center">
        {title}
      </h2>
      <p className="mb-10 text-lg text-opacity-60">{description}</p>
      <Link
        to={linkDestination}
       
      >
      <Button title="Learn More" variant="contained" />
      </Link>
    </div>
  );
};
