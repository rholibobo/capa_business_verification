import { Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 px-6 py-12 text-white">
      <div className="md:w-10/12 grid grid-cols-1 md:grid-cols-3 items-center gap-4 border-white border-b mx-auto py-10">
        <h5 className="text-3xl font-bold tracking-widest">LOGO</h5>
        <div>
          <h5 className="text-2xl font-semibold tracking-widest mb-3">
            Solutions
          </h5>
          <Stack direction="column" spacing={{xs: 1, sm: 2,}}>
            <li>Business Verification</li>
            <li>Email Verification</li>
          </Stack>
        </div>
        <div>
          <h5 className="text-2xl font-semibold tracking-widest mb-3">
            Use Cases
          </h5>
          <Stack direction="column" spacing={{xs: 1, sm: 2,}}>
            <li>Lorem1</li>
            <li>Lorem2</li>
          </Stack>
        </div>
      </div>
      <div className="mt-8 md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-2">
        <span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
        <ul className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Terms & Conditions</li>
        </ul>
        <ul className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
