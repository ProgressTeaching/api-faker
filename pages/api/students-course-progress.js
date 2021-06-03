import students from "../../data/students.json";

export default (req, res) => {
  res.status(200).json(students)
}
