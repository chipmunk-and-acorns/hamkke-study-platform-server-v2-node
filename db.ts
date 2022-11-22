import "reflect-metadata"
import {DataSource} from "typeorm";
import {User} from "./model/User";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    entities: [User],
    synchronize: true,
    logging: false,
    migrations: [__dirname + "/migration/"]
});

AppDataSource.initialize()
    .then(() => console.log("Database Connect Success"))
    .catch(console.log);

export { AppDataSource };
