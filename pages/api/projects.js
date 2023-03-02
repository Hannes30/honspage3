import projects from "public/projects.json";
export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(projects);
  } else {
    res.status(405).end();
  }
}
