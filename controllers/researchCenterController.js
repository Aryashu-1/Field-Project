const ResearchCenter = require('../models/ResearchCenter');

// Create a new Research Center
exports.createResearchCenter = async (req, res) => {
  try {
    const { name, location, facultyPartnerId, studentId, industryId, focus, description, imageUrls, address, industryPartnerIds } = req.body;
    const newResearchCenter = new ResearchCenter({
      name,
      location,
      facultyPartnerId,
      studentId,
      industryId,
      focus,
      description,
      imageUrls,
      address,
      industryPartnerIds
    });
    await newResearchCenter.save();
    res.status(201).json(newResearchCenter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Research Centers
exports.getAllResearchCenters = async (req, res) => {
  try {
    const researchCenters = await ResearchCenter.find();
    res.status(200).json(researchCenters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Research Center by ID
exports.getResearchCenterById = async (req, res) => {
  try {
    const researchCenter = await ResearchCenter.findById(req.params.id);
    if (!researchCenter) return res.status(404).json({ message: 'Research Center not found' });
    res.status(200).json(researchCenter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Research Center by ID
exports.updateResearchCenter = async (req, res) => {
  try {
    const { name, location, facultyPartnerId, studentId, industryId, focus, description, imageUrls, address, industryPartnerIds } = req.body;
    const updatedResearchCenter = await ResearchCenter.findByIdAndUpdate(
      req.params.id,
      { name, location, facultyPartnerId, studentId, industryId, focus, description, imageUrls, address, industryPartnerIds },
      { new: true }
    );
    if (!updatedResearchCenter) return res.status(404).json({ message: 'Research Center not found' });
    res.status(200).json(updatedResearchCenter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Research Center by ID
exports.deleteResearchCenter = async (req, res) => {
  try {
    const deletedResearchCenter = await ResearchCenter.findByIdAndDelete(req.params.id);
    if (!deletedResearchCenter) return res.status(404).json({ message: 'Research Center not found' });
    res.status(200).json({ message: 'Research Center deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
