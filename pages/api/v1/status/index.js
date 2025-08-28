import database from "infra/database";

async function status(req, res) {
  // const uptadedAt = Date.now() -> Obtem a data no formato de timestapm
  const uptadedAt = new Date().toISOString();

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnectionsValue = maxConnectionsResult.rows[0].max_connections;

  const versionPgResult = await database.query("SHOW server_version;");
  const versionPostgresValue = versionPgResult.rows[0].server_version;

  const databaseName = process.env.POSTGRES_DB;
  const openedConnection = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname= $1;",
    values: [databaseName],
  });

  const openedConnectionValue = openedConnection.rows[0].count;

  // console.log(result.rows);
  res.status(200).json({
    updated_at: uptadedAt,
    dependencies: {
      database: {
        version: versionPostgresValue,
        max_connections: maxConnectionsValue,
        opened_connections: openedConnectionValue,
      },
    },
  });
}

export default status;
