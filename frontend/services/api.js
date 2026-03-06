const BASE_URL = "http://localhost:8000/";
const API = "api/students/";

export async function getStudents() {
  const response = await fetch("http://127.0.0.1:8000/api/students/");
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getStudentById(id) {
  const response = await fetch(`http://localhost:8000/api/students/${id}/`);
  const data = await response.json();
  // console.log(data);
  return data;
}
