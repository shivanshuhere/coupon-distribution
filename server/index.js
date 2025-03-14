import app from "./app";
import dbConnect from "./db";

const PORT = process.env.PORT || 5000;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  })
  .catch((error) => console.log(error));
