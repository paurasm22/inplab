const express = require("express");
const app = express();
const namesRouter = require("./Routes/routes.js");

// Use the names router
app.use("/names", namesRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
