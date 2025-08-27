import database from "infra/database";

async function status(req, res) {
  // const uptadedAt = Date.now() -> Obtem a data no formato de timestapm
  const uptadedAt = new Date().toISOString();

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  console.log(maxConnectionsResult.rows[0].max_connections);
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;

  const versionPgResult = await database.query("SHOW server_version;");

  const versionPostgresValue = versionPgResult.rows[0].server_version;

  // console.log(result.rows);
  res.status(200).json({
    updated_at: uptadedAt,
    dependencies: {
      database: {
        version: versionPostgresValue,
        max_connections: maxConnectionsValue,
      },
    },
  });
}

export default status;
