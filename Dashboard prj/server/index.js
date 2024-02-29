// import { Express } from "express";
import express from "express";
const { Express } = express;
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import GasInsightRoutes from "./routes/GasInsight.js";

// data import
import User from "./models/User.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} from "./data/index.js";
import { GasInsightData } from "./data/GasInsight.js";

// Model Import
import GasInsight from "./models/GasInsight.js";
import Product from "./models/Product.js";
import ProductStat from "./models/productStat.js";
import Transaction from "./models/Transaction.js";
import OverallStats from "./models/overallStats.js";

/** Configuration */
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**Routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
app.use("/gasinsight", GasInsightRoutes);

/** Mongoose setup */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      // GasInsight.insertMany(GasInsightData);
      // User.insertMany(dataUser);
      // Product.insertMany(dataProduct);
      // ProductStat.insertMany(dataProductStat);
      // Transaction.insertMany(dataTransaction);
      // OverallStats.insertMany(dataOverallStat);
    });
  })
  .catch((error) => {
    console.log(`${error} could not connect`);
  });
