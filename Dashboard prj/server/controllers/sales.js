import OverallStat from "../models/overallStats.js";

export const getSales = async (req, res) => {
  try {
    const OverallStats = await OverallStat.find();
    res.status(200).json(OverallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

