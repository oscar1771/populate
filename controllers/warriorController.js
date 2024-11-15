// In src/controllers/playerController.js
const warriorService = require("../services/warriorService");

const getAllWarriors = async (req, res) => {
  try {
    console.log("Entra");
    const allWarriors = await warriorService.getAllWarriors();
    if (!allWarriors) {
      res.status(404).send({ message: 'No existen warriors' });
    }
    res.send({ status: "OK", data: allWarriors });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({
        status: "FAILED",
        message: "Error al realizar la petición:",
        data: { error: error?.message || error }
      });
  }
};

module.exports = {getAllWarriors};
