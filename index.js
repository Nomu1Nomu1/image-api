import e from "express";
import router from "./routes/web.js";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = e();
const port = process.env.PORT;

app.use(e.json());
app.use(router);

app.use('/images', e.static('images'));

// app.use(cors({
//     origin: `http://localhost:${port}`
// }))

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});