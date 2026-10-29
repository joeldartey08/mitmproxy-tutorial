import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const response = await fetch("http://localhost:3000");
  const result = await response.text();

  res.send(result);
});

app.listen(9000, () => {
  console.log("service A rnning on port 9000");
});
