
const Warrior = require('../models/warriorModel');


const getAllWarriors = async () => {
    try {

        console.log("Entra a");
        const warriors = await Warrior.find().exec();

        const returnWarriors = [];
        for (let i = 0; i < warriors.length; ++i)
        {
            const warrior = await Warrior.findById(warriors[i]._id).exec();
            console.log(warrior);

            await warrior.equipment.populate('potion');
            returnWarriors.push(warrior);

        }
       
        return { message: "PLAYER OK", returnWarriors };
    }
    catch (error) {
        throw error;
    }
};




module.exports = {getAllWarriors};
