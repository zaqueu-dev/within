import React from "react";

export default function HomeNote() {
  return (
    <div className="bg-slate-400 bg-opacity-25 bg-blur-sm h-44 flex justify-between rounded-lg ">
      <div className="flex flex-col justify-between p-2 backdrop-blur-sm flex-grow">
        <div className="font-bold font-Dasis text-3xl">Título</div>
        <div className="text-3xl">lorem</div>
        <div>Footer</div>
      </div>
      <div className="w-28 bg-slate-700 text-white flex text-5xl rounded-r-lg">
        <div className=" w-full flex items-center justify-center transition ease-in-out">
          <i className="bx bxs-edit"></i>
        </div>
      </div>
    </div>
  );
}
