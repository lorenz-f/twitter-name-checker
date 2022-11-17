import axios from "axios";

const USER_SEARCH = `https://api.twitter.com/2/users/by/username/`;
const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export default async function handler(req, res) {
  const query = req.query.q;
  const response = await axios.get(`${USER_SEARCH}${query}`, { headers });
  const id = response.data;
  res.send(id);
}