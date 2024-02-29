import mongoose from "mongoose";

const TransactionsSchema = new mongoose.Schema(
  {
    UserId: String,
    cost:String,
    products: {
      type: [mongoose.Types.ObjectId],
      of:Number
    }
  },
  
  { timestamps: true },
);

const Transaction = mongoose.model("Transactions", TransactionsSchema);

export default Transaction;
