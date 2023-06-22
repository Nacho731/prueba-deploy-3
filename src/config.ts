import dotenv from "dotenv";

dotenv.config();

const config = {
  dbUser: process.env.DB_USER || "postgres",
  dbPassword: process.env.DB_PASSWORD || "admin",
  dbHost: process.env.DB_HOST || "localhost",
  dbName: process.env.DB_NAME || "walletwise",
  dbPort: process.env.DB_PORT || "5432",
  dev: process.env.NODE_ENV !== "production",
  port: process.env.API_PORT || "3001",
  host: process.env.API_host || "localhost",
  cors: process.env.CORS || "http://localhost:5173/",
  secret: process.env.JWT_SECRET || "seAcuerdanDeTuSecreto.com?",
  gmail: process.env.GMAIL_MAIL || "walletwise23@gmail.com",
  pass: process.env.GMAIL_PASS || "xbaxtaxtqpeawayl",
};

export default config;