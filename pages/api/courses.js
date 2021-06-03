import courses from "../../data/courses.json";

export default (req, res) => {
  res.status(200).json(courses)
}
