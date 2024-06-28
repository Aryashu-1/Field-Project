const MOU = require('../models/MOU');

// Create a new MOU
exports.createMOU = async (req, res) => {
  try {
    const { name, industryId, validity, isActive, duration, agreementDate } = req.body;
    const newMOU = new MOU({
      name,
      industryId,
      validity,
      isActive,
      duration,
      agreementDate
    });
    await newMOU.save();
    res.status(201).json(newMOU);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all MOUs
exports.getAllMOUs = async (req, res) => {
  try {
    const MOUs = await MOU.find();
    res.status(200).json(MOUs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single MOU by ID
exports.getMOUById = async (req, res) => {
  try {
    const MOU = await MOU.findById(req.params.id);
    if (!MOU) return res.status(404).json({ message: 'MOU not found' });
    res.status(200).json(MOU);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a MOU by ID
exports.updateMOU = async (req, res) => {
  try {
    const { name, industryId, validity, isActive, duration, agreementDate } = req.body;
    const updatedMOU = await MOU.findByIdAndUpdate(
      req.params.id,
      { name, industryId, validity, isActive, duration, agreementDate },
      { new: true }
    );
    if (!updatedMOU) return res.status(404).json({ message: 'MOU not found' });
    res.status(200).json(updatedMOU);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a MOU by ID
exports.deleteMOU = async (req, res) => {
  try {
    const deletedMOU = await MOU.findByIdAndDelete(req.params.id);
    if (!deletedMOU) return res.status(404).json({ message: 'MOU not found' });
    res.status(200).json({ message: 'MOU deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
