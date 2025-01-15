import React from "react";

const Home1 = () => {
  return (
    <>
      <div className="flex flex-row ml-[25%] gap-10 ">
        <div className=" text-[250px] text-[#001845]"> ꋬ </div>
        <div className="">
          <div className="pt-20  text-9xl text-[#004e89]"> 𝔸𝕃𝕌𝕄ℕ𝕀! </div>
          <div className=" pl-48 text-5xl text-[#1a659e]"> ℂ𝕆ℕℕ𝔼ℂ𝕋𝕀𝕆ℕ!</div>
        </div>
      </div>

      <div className=" text-3xl w-[40%] ml-[37%] -mt-4 text-[#1e2749]">
        Join a vast network of alumni committed to building impactful
        connections and driving career growth.
      </div>

      <div className="flex flex-col ml-40 mt-20 ">
        <div className="text-3xl font-extrabold ml-3 text-black" data-aos="fade-left"> WHAT IS </div>
        <div className=" text-7xl font-extrabold text-[#1e96fc]" data-aos="zoom-in"> ALUMNI? </div>
      </div>

      <div className="w-[55%] ml-96 mt-16"> 
        <p className="text-[24px] text-black" data-aos="zoom-in"> 
          Alumni are graduates of an institution who maintain a lifelong
          connection to it. They participate in networking, mentorship, and
          philanthropic activities, contributing to their alma mater and
          supporting fellow graduates. Alumni networks foster community and
          career development, allowing former students to share experiences and
          resources.
        </p>{" "}
      </div>
    </>
  );
};

export default Home1;
