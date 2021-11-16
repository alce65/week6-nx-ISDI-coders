import { getAllBooks, insertBook } from "../../lib/crud";
export default function handler(req, res) {
  if (req.method.toUpperCase() === "GET") {
    getAllBooks()
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => {
        return res.status(500).json({ Error: err });
      });
  } else if (req.method.toUpperCase() === "POST") {
  }
}
