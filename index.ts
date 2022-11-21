// global
import express, {Request, Response} from "express"
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
//local
import "./env";
import "./db";
import userRouter from "./routes/user";

const app = express(); // express 앱 생성
app.set("port", process.env.PORT || 5000); // port 설정 (기본값 -> 5000)

// cors option
const corsOptions = {
    origin: "http://localhost:3000", // client 허용 origin
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions)); // cors 옵션을 토대로 express 에 적용
app.use(bodyParser.json()); // body 의 json 데이터 읽도록 적용
app.use(express.static('public/apidoc'))


if (process.env.NODE_ENV === "production") app.use(morgan("combined"));
else app.use(morgan("dev"));

app.get("/", (req, res) => res.render("index.html"))
app.use("/api/user", userRouter); // user router
app.use((req, res, next) => {
    return res.status(404).send("잘못된 접근경로");
})

app.listen(app.get("port"),
    () => console.log("connected server with port " + app.get("port")));