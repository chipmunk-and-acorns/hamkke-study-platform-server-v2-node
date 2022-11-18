import express, {Request, Response} from "express"
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import errorhandler from "errorhandler";
import "reflect-metadata"

const app = express();
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan("tiny"));
if(process.env.NODE_ENV === "development") {
    app.use(errorhandler());
}


app.get("/", (_req: Request, res: Response) => res.status(200).send("Hamkke Server API URL"));
app.listen(5000, () => console.log("Connected hamkke server..."))