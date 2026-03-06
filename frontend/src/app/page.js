"use client";
import React, { useEffect, useState } from "react";
import ProfileCard from "../../component/ProfileCard.jsx";
import { getStudents } from "../../services/api.js";

export default function Home() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getStudents();
      setDetails(data);
    }
    fetchData();
  }, []);

  console.log(details);
  return (
    <div className="flex flex-wrap justify-around">
      {details.map((detail) => (
        <ProfileCard
          key={detail.student_id}
          name={detail.first_name}
          studentId={detail.student_id}
          dept={detail.department}
          id={detail.id}
        />
      ))}
    </div>
  );
}
