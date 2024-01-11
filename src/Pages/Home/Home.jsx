import React from "react";
import heroImage from "../../assets/4565.jpg";
import { HomeCards } from "./HomeCards";
import businessAvatar from "../../assets/secureVerr.svg";
import emailAvatar from "../../assets/emailVerr.svg";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const cardDetails = [
    {
      title: "Verify with Business name",
      description:
        "Experience hassle-free verification by simply typing in the business name. Our Verify with Business Namefeature puts the power in your hands, allowing you to effortlessly authenticate businesses by entering their names. Swift, accurate, and user-friendly",
      link: "/",
      avatar: businessAvatar,
    },
    {
      title: "Verify with business email",
      description:
        "Seamlessly confirm identities and ensure trust by leveraging our 'verify with email' feature - With just an email address, you can authenticate users and businesses, adding an extra layer of security to your interactions",
      link: "/",
      avatar: emailAvatar,
    },
  ];
  return (
    <div className="mt-14 md:mt-10">
      <section className="flex flex-col md:flex-row justify-between items-center  text-center p-4 md:px-10 md:py-8 mx-auto text-green-900">
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold my-6">
            Allow us handle your verification for you
          </h1>
          <p className="">
            <span className="text-orange-600 font-bold">
              Capa Business Verification
            </span> serves as your comprehensive business verification platform,
            offering a streamlined experience for discovering and connecting
            with genuine businesses and their owners. Our platform is designed
            to provide you with all the tools you need for reliable and
            authentic business verification, ensuring a secure and trustworthy
            environment for your business interactions
          </p>
          <div className="flex mt-4 max-w-[25rem] md:w-[72%] lg:w-3/5 items-center justify-between">
            <Link className="grid place-items-center" to="/register">
              
              <Button padding="px-6 py-3 md:px-4 lg-px-6" title="Get started" variant="contained" />
            </Link>
            <Link className="grid place-items-center">
              <Button padding="px-6 py-3 md:px-4 lg-px-6" title="Learn more" variant="outlined" />
            </Link>
          </div>
        </div>
        <img src={heroImage} className="md:w-2/5 mt-10 md:mt-0" alt="Hero" />
      </section>
      <>
        <hr />
        <h2 className="text-center text-2xl my-10 font-semibold">
          Reliable end-to-end verification services
        </h2>
        <section className="w-11/12 lg:w-10/12 mx-auto p-2 flex flex-grow flex-col md:flex-row gap-16 md:gap-10  justify-between">
          {cardDetails.map((card, index) => {
            return (
              <HomeCards
                key={index}
                title={card.title}
                description={card.description}
                linkDestination={card.link}
                avatar={card.avatar}
              />
            );
          })}
        </section>

        <section className="text-center mx-auto p-4 bg-zinc-50 mt-10 pb-20">
          <h2 className="text-2xl leading-[4] font-semibold text-green-900">
            Take the next step
          </h2>
          <p className="mb-8 text-lg">
            Click the link below to create an account and select any of our
            services
          </p>
          <div className="md:w-1/6 mx-auto">
            <Link className="grid place-items-center" to="/register">
              <Button padding="p-2" variant="outlined" title="Get started" />
            </Link>
          </div>
        </section>
      </>
    </div>
  );
};

export default Home;
