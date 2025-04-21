import database from "../../../../infra/database";

function status(req, res) {
  console.log(database);
  res.status(200).json("Alunos acima de media");
}

export default status;
