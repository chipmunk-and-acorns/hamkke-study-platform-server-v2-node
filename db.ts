import "reflect-metadata"
import {DataSource} from "typeorm";
import {User} from "./model/User";
import {Article} from "./model/Article";
import {ArticleComment} from "./model/ArticleComment";
import {Stack} from "./model/Stack";
import {ArticleStack} from "./model/ArticleStack";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    entities: [User, Article, ArticleComment, Stack, ArticleStack],
    synchronize: true,
    logging: false,
    migrations: [__dirname + "/migration/"]
});

AppDataSource.initialize()
    .then(() => console.log("Database Connect Success"))
    .catch(console.log);

export { AppDataSource };
