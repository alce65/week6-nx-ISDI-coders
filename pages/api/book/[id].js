import { getBookById } from "../../../lib/crud";
export default function handler(req, res) {
  const id = req.query.id;

  switch (req.method.toUpperCase()) {
    case "GET":
      getBookById(id)
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((err) => {
          return res.status(500).json({ Error: err });
        });
    case "PUT":
    case "PATCH":
      return;
    case "DELETE":
      return;
  }
}
