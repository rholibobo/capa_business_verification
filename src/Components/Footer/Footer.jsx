import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-green-900 px-6 py-12 text-white">
      <div className="md:w-10/12 grid grid-cols-1 md:grid-cols-3 items-center gap-4 border-white border-b mx-auto py-10">
        <h5 className="text-3xl font-bold tracking-widest">LOGO</h5>
        <div className="hover:bg-[rgba(0,0,0,0.4)] rounded-md p-1 w-2/3">
          <h5 className="text-2xl font-semibold tracking-widest mb-3">
            Solutions
          </h5>
          <Stack direction="column" spacing={{xs: 1, sm: 2,}}>
            <Link to="/" className="hover:underline">Business Verification</Link>
            <Link to="/" className="hover:underline">Email Verification</Link>
          </Stack>
        </div>
        <div className="hover:bg-[rgba(0,0,0,0.4)] rounded-md p-1 w-2/3">
          <h5 className="text-2xl font-semibold tracking-widest mb-3">
            Use Cases
          </h5>
          <Stack direction="column" spacing={{xs: 1, sm: 2,}}>
            <Link to="/" className="hover:underline">Lorem1</Link>
            <Link to="/" className="hover:underline">Lorem2</Link>
          </Stack>
        </div>
      </div>
      <div className=" mt-8 md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-2">
        <span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
        <ul className="mt-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <Link to="/" className="hover:underline">Privacy Policy</Link>
          <Link to="/" className="hover:underline">Terms of Use</Link>
          <Link to="/" className="hover:underline">Terms & Conditions</Link>
        </ul>
        <ul className="mt-4 md:mt-0 flex flex-row md:items-center justify-between md:justify-self-end md:w-1/2">
          <Link to="/"><FacebookOutlinedIcon  /></Link>
          <Link to="/"><Twitter  /></Link>
          <Link to="/"><LinkedIn  /></Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
