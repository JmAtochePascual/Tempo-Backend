import app from "./server";

// Server  up
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on the port:${PORT}`);
});