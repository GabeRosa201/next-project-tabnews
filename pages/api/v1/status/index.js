import database from "../../../../infra/database";

function status(req, res) {
  res.status(200).json("Alunos acima de media");
}

export default status;
