import React from "react";

export default function StudentDetails({ details }) {
  return (
    <div className="">
      <h1>name = {`${details.first_name} ${details.last_name}`} </h1>
      <h1>id = {details.id} </h1>
      <h1>class = {details.department}</h1>
      <h1>ph no = {details.phone_number}</h1>
      <h1>address = {details.address}</h1>
      <h1>academic year = {details.academic_year}</h1>
      <h1>cgpa = {details.cgpa}</h1>
    </div>
  );
}
