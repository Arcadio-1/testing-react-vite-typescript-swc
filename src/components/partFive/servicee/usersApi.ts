import axios from "axios";

export async function getUser(id: string) {
  return axios.get(`http://localhost:3000/users/${id}`).then((res) => res.data);
}
