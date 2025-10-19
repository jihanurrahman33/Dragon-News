import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 p-3">
      <p className="test-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true}>
        <p className="font-bold">Lorem ipsum dolor sit amet consectetur,</p>
        <p className="font-bold">Lorem ipsum dolor sit amet consectetur,</p>
        <p className="font-bold">Lorem ipsum dolor sit amet consectetur,</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
