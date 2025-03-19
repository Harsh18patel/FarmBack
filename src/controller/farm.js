import { Model } from "../model/index.js";


async function generateFarmId() {
    const lastFarm = await Model?.Farm.findOne().sort({ farmId: -1 }).exec();
    if (!lastFarm) return "FARM001";
  
    const lastIdNumber = parseInt(lastFarm.farmId.replace("FARM", ""), 10);
    return `FARM${String(lastIdNumber + 1).padStart(3, "0")}`;
  }

  export const farmImage = async (req,res)=>{
    try {
        let input = req.body;
        const files = req.files;
    
        if (!files || files.length === 0) {
          return res.status(400).send({
            data: null,
            success: false,
            message: "At least one image must be uploaded",
          });
        }
    
        const farmPhotos = files.map((file) => `/uploads/${file.filename}`);
    
        input.farmId = await generateFarmId();
        input.farmPhotos = farmPhotos;
    
        let match = await Model?.Farm?.create(input);
    
        res.status(200).send({
          data: match,
          success: true,
          message: "Farm created successfully",
        });
      } catch (err) {
        console.log("🚀 ~ farmImage ~ err:", err)
        res.status(400).send({
          data: null,
          success: false,
          message: err.message,
        });
      }
    };

    export const getFarms = async (req, res) => {
        try {
            let farms = await Model?.Farm?.find();
    
            res.status(200).send({
                data: farms,
                success: true,
                message: "Farms fetched successfully"
            });
        } catch (err) {
            console.log("🚀 ~ getFarms ~ err:", err);
            res.status(400).send({
                data: null,
                success: false,
                message: err.message
            });
        }
    };


    export const getFarmById = async (req, res) => {
        try {
            let farm = await Model?.Farm?.findOne({ farmId: req.params.farmId });
    
            if (!farm) {
                return res.status(404).send({
                    data: null,
                    success: false,
                    message: "Farm not found"
                });
            }
    
            res.status(200).send({
                data: farm,
                success: true,
                message: "Farm fetched successfully"
            });
        } catch (err) {
            console.log("🚀 ~ getFarmById ~ err:", err);
            res.status(400).send({
                data: null,
                success: false,
                message: err.message
            });
        }
    };
    
    