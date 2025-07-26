const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const connectDB = require("./db/connectDB.js");
const authRoutes = require("./routes/auth.route.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get __dirname in CommonJS (it's available by default)
// const __dirnameValue = __dirname;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirnameValue, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirnameValue, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port:", PORT);
});
