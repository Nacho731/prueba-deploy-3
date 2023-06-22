import { Sequelize } from "sequelize-typescript";
import config from "./config";
config;

 ////////////////// *LOCAL* /////////////////////////

// export const sequelize = new Sequelize({
//   dialect: "postgres",
//   database: config.dbName,
//   password: config.dbPassword,
//   username: config.dbUser,
//   storage: ":memory:",
//   models: [__dirname + "/models"],
// });

//////////////// *DEPLOY* ///////////////////////

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: "walletwise",
  password: "XWq500msNDqt5hFrIijnlcfQ4Pt29zK3",
  username: "walletwise_user",
  host: "dpg-cia95b5gkuvu1mfjd4lg-a",
  port: 5432,
  models: [__dirname + "/models"],
});
