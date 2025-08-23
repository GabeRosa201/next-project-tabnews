import database from "infra/database";

async function status(req, res) {
  // const uptadedAt = Date.now() -> Obtem a data no formato de timestapm
  const uptadedAt = new Date().toISOString();

  const result = await database.query(" SELECT 1 * 1 AS multiplicacao");
  // console.log(result.rows);
  res.status(200).json({
    updated_at: uptadedAt,
  });
}

export default status;
