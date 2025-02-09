import React from "react";

const Footer = () => {
  return (
      <>
          <div className="bg-black">
      <hr className=" border-gray-200 black sm:mx-auto dark:border-gray-700 " />
      <span className="block text-sm bg-black text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="/index" className="hover:underline">
          Code Chronicles™
        </a>
        . All Rights Reserved.
              </span>
              </div>
    </>
  );
};

export default Footer;
