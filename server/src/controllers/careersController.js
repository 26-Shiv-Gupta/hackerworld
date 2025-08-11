const Careers = require('../models/careers');

// Get the Careers data
const getCareers = async (req, res) => {
  try {
    const careers = await Careers.find(); 
    res.status(200).json(careers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching careers data", error });
  }
};

const setCareer = async (req, res) => {
  try {
    const newCareers = await Careers.create(req.body);
    res.status(201).json(newCareers);
  } catch (error) {
    res.status(400).json({ message: "Error creating careers data", error });
  }
};

const updateCareer = async (req, res) => {
  try {
    const careers = await Careers.findById(req.params.id);
    if (!careers) {
      return res.status(404).json({ message: "Careers data not found" });
    }
    const updatedCareers = await Careers.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json(updatedCareers);
  } catch (error) {
    res.status(400).json({ message: "Error updating careers data", error });
  }
};

const deleteCareer = async (req, res) => {
  try {
    const careers = await Careers.findById(req.params.id);
    if (!careers) {
        return res.status(404).json({ message: "Careers data not found" });
    }
    console.log(careers);
    await careers.deleteOne();
    res.status(200).json({ message: "Careers data deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting careers data", error });
  }
};


module.exports = {
  getCareers,
  setCareer,
  updateCareer,
  deleteCareer
};
