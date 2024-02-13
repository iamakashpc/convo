import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config(); // Move dotenv.config() to the top

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("server running on port " + PORT);
});

app.listen(PORT, () => {
	connectToMongoDB();
	console.log("listening on port " + PORT);
});
