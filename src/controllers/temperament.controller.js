const axios = require("axios");

const { Temperament } = require("../db");
require("dotenv").config();
const { DB_API_KEY } = process.env;

//Me traigo los temperamentos de la api
const dogsTemperament = async (req, res) => {
    try {
        const temperamentApi = await axios.get(
            `https://api.thedogapi.com/v1/breeds?apikey=${DB_API_KEY}`
        );
        //   console.log("temperamentApi",temperamentApi);
        const hasTemperament = temperamentApi.data.map((d) =>
            d.temperament ? d.temperament : "Has not temperaments"
        );
        //   console.log(hasTemperament);
        const splitTemp = hasTemperament.map((t) => t.split(", "));
        // console.log("split", splitTemp);

        let setTemp = new Set(splitTemp);
        //  console.log('set',setTemp)
        for (t of setTemp) { 
            if (t)
                await Temperament.findOrCreate({  
                    where: { name: t },
                });
        }
        const temperamentDB = await Temperament.findAll();
        res.status(200).json(temperamentDB);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { dogsTemperament };
