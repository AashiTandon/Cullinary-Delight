const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("Error connecting to database:", err));

const menuRoutes = require('./routes/menuRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require("./routes/authRoutes");

app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send("Hello from Express Server!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}`);
});
