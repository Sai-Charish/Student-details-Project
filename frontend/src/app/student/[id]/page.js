"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getStudentById } from "../../../../services/api";
import Loading from "../../../../component/Loading";
import StudentDetails from "../../../../component/StudentDetails";

export default function page() {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchDataById(id) {
      const data = await getStudentById(id);
      setDetails(data);
      console.log(data);
    }
    fetchDataById(id);
  }, []);
  return (
    <>
      {details.length == 0 ? <Loading /> : <StudentDetails details={details} />}
    </>
  );
}
