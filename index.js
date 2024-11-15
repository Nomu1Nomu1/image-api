import e from "express";
import router from "./routes/web.js";
import dotenv from "dotenv";

dotenv.config();

const app = e();
const port = process.env.PORT;

app.use(e.json());
app.use(router);

app.use('/images', e.static('images'));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});