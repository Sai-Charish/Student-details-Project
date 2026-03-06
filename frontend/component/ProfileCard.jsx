import React from "react";
import DetailsButton from "./DetailsButton";
export default function profilecard({ name, studentId, dept, id }) {
  console.log(id);
  return (
    <>
      <div className=" flex flex-row justify-between border-2 border-amber-50 w-1/4 p-6 m-6 bg-gray-900 rounded-3xl drop-shadow-xl drop-shadow-gray-700 ">
        <div>
          <h1>{name}</h1>
          <h2>{studentId}</h2>
          <h3>{dept}</h3>
        </div>
        <div className="flex items-end">
          <DetailsButton id={id} />
        </div>
      </div>
    </>
  );
}
