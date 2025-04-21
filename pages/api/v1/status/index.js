import database from "infra/database";

async function status(req, res) {
  const result = await database.query(" SELECT 1 * 1 AS multiplicacao");
  console.log(result.rows);
  res.status(200).json("Alunos acima de media");
}

export default status;
