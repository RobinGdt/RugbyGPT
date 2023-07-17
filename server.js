const express = require("express");
const app = express();

// Définition de la route
app.get("/api/rugbygpt", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Démarrage du serveur
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
