import app from "./app.js";
import dbConnect from "./db/index.js";

const PORT = process.env.PORT || 5000;
try {

  dbConnect()
    .then(() => {
      app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
      });
    })
    .catch((error) => console.log(error));
  
} catch (error) {
  console.log(error);
}