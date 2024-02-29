// import gasInsight from "../models/GasInsight.js";

// export const getGasInsight = async (req, res) => {
//   try {
//     const gasInsight = await gasInsight.find();

//     res.status(200).json(gasInsightData);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };


import GasInsight from "../models/GasInsight.js";


export const getGasInsight = async(req, res) => {
  try{
    // const {id} = "65d3f03bb2e7265f5b029607";
    const {id1} = req.params;
    const GasInsightData = await GasInsight.find();
    res.status(200).json(GasInsightData);
    console.log("api called")

  } catch (error){
    res.status(404).json({ message : error.message });
  }
}


// import GasInsight from "../models/GasInsight.js";

// export const getGasInsight = async (req, res) => {
// console.log("on routes")
//   try {
//     console.log("controller called")
//     const id  = "65d3f03bb2e7265f5b029607";
//     const GasInsightData = await GasInsight.findById(id);
//     console.log(GasInsightData)
//     GasInsightData.forEach(async (insight) => {
//       console.log(insight);
//     });

//     console.log("api called");
//     res.status(200).json({ message: "Data logged" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
