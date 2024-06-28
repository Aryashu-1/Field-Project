const Startup = require('../models/Startup');

// Create a new Startup
exports.createStartup = async (req, res) => {
  try {
    const { name, description, logo, studentIds, facultyIds, industryPartnersInvolved } = req.body;
    const newStartup = new Startup({
      name,
      description,
      logo,
      studentIds,
      facultyIds,
      industryPartnersInvolved
    });
    await newStartup.save();
    res.status(201).json(newStartup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Startups
exports.getAllStartups = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Startup by ID
exports.getStartupById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id);
    if (!startup) return res.status(404).json({ message: 'Startup not found' });
    res.status(200).json(startup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Startup by ID
exports.updateStartup = async (req, res) => {
  try {
    const { name, description, logo, studentIds, facultyIds, industryPartnersInvolved } = req.body;
    const updatedStartup = await Startup.findByIdAndUpdate(
      req.params.id,
      { name, description, logo, studentIds, facultyIds, industryPartnersInvolved },
      { new: true }
    );
    if (!updatedStartup) return res.status(404).json({ message: 'Startup not found' });
    res.status(200).json(updatedStartup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Startup by ID
exports.deleteStartup = async (req, res) => {
  try {
    const deletedStartup = await Startup.findByIdAndDelete(req.params.id);
    if (!deletedStartup) return res.status(404).json({ message: 'Startup not found' });
    res.status(200).json({ message: 'Startup deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
