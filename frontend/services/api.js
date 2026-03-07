const BASE_URL = "http://localhost:8000/";
const API = "api/students/";

export async function getStudents() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/students/`,
  );
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getStudentById(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/students/${id}/`,
  );
  const data = await response.json();
  // console.log(data);
  return data;
}
