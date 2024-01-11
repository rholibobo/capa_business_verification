import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
export const HomeCards = ({ title, description, linkDestination, avatar }) => {
  return (
    <div className="p-3 lg:p-8 md:w-2/3 bg-teal-50 border border-green-900 rounded-md flex flex-col flex-grow">
      <div className="mx-auto w-2/5 md:w-1/3 place-items-center grid">
        <img src={avatar} alt="card-img" className="md:w-[120px]" />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h2 className="my-2 text-xl font-semibold text-center">
          {title}
        </h2>
        <p className="mb-10 text-opacity-60">{description}</p>
        <Link className="grid place-items-center" to={linkDestination}>
          <Button padding="p-2" title="Learn More" variant="contained" />
        </Link>
      </div>
    </div>
  );
};

