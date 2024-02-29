import mongoose from "mongoose";

const GasInsightSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    insight: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    published: {
      type: Date,
    },
    added: {  
      type: Date,
      required: true,
    },
    sector: String,
    topic: String,
    region: String,
    country: String,
    relevance: Number,
    intensity: Number,
    likelihood: Number,
    pestle: String,
    source: String,
    start_year: String,
    end_year: String,
    impact: String,
  },
  { timestamps: true },
);

const GasInsight = mongoose.model("GasInsight", GasInsightSchema);

export default GasInsight;
