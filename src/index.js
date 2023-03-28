const { setupServer } = require("./server");

const PORT = process.env.PORT || 3000;
const app = setupServer();
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
