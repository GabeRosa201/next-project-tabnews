import database from "infra/database";

async function status(req, res) {
  // const uptadedAt = Date.now() -> Obtem a data no formato de timestapm
  const uptadedAt = new Date().toISOString();

  const max_connections = await database.query("SHOW max_connections;");
  const version_pg = await database.query("SHOW server_version;");
  // console.log(result.rows);
  res.status(200).json({
    updated_at: uptadedAt,
    server: {
      max_connection: max_connections,
      version: version_pg,
    },
  });
}

export default status;
