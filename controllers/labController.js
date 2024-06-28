const Lab = require('../models/Lab');

// Create a new Lab
exports.createLab = async (req, res) => {
  try {
    const { department, location, area, facultyPartnerIds, industryPartnerIds, description, imageUrls } = req.body;
    const newLab = new Lab({
      department,
      location,
      area,
      facultyPartnerIds,
      industryPartnerIds,
      description,
      imageUrls
    });
    await newLab.save();
    res.status(201).json(newLab);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Labs
exports.getAllLabs = async (req, res) => {
  try {
    const labs = await Lab.find();
    res.status(200).json(labs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Lab by ID
exports.getLabById = async (req, res) => {
  try {
    const lab = await Lab.findById(req.params.id);
    if (!lab) return res.status(404).json({ message: 'Lab not found' });
    res.status(200).json(lab);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Lab by ID
exports.updateLab = async (req, res) => {
  try {
    const { department, location, area, facultyPartnerIds, industryPartnerIds, description, imageUrls } = req.body;
    const updatedLab = await Lab.findByIdAndUpdate(
      req.params.id,
      { department, location, area, facultyPartnerIds, industryPartnerIds, description, imageUrls },
      { new: true }
    );
    if (!updatedLab) return res.status(404).json({ message: 'Lab not found' });
    res.status(200).json(updatedLab);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Lab by ID
exports.deleteLab = async (req, res) => {
  try {
    const deletedLab = await Lab.findByIdAndDelete(req.params.id);
    if (!deletedLab) return res.status(404).json({ message: 'Lab not found' });
    res.status(200).json({ message: 'Lab deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
