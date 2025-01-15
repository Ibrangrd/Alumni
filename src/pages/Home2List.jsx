import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
const Home2List = ({ img, fun, lin }) => {
  return (
    <>
      <div className=" group w-[25%] h-auto  rounded-3xl bg-[#edf2f4]">
        <div>
          <img className=" w-[100%] h-64 rounded-3xl p-4" src={img} />
          <div className="" >
            <h1 className="text-center font-bold text-black text-xl pb-5 pt-5">
              {fun}
            </h1>
            <div className="flex justify-center mb-4">
            <Link to={lin}>
              <button
                class="rounded-md border w-32 font-semibold  border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              > VIEW</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2List;
