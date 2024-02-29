import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: String,
    yearlySaleTotal: Number,
    yearlyTotalSoldUnit: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      }
    ],
    dailyData:[
      {
        data: String, // YYYY-MM-DD format
        totalSales: Number,
        totalUnits: Number,
      }
    ],
    supply: Number,
  },
  {timestamps: true}
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;
