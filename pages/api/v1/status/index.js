import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 4 + 7 as SUM;");
  console.log(result);
  response.status(200).json({ chave: "OK" });
}

export default status;
