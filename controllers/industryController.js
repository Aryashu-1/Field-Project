const Industry = require('../models/Industry');

// Create a new Industry
exports.createIndustry = async (req, res) => {
  try {
    const { name, description, imageUrls, industryPartnerIds, location } = req.body;
    const newIndustry = new Industry({
      name,
      description,
      imageUrls,
      industryPartnerIds,
      location
    });
    await newIndustry.save();
    res.status(201).json(newIndustry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Industries
exports.getAllIndustries = async (req, res) => {
  try {
    const industries = await Industry.find();
    res.status(200).json(industries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Industry by ID
exports.getIndustryById = async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) return res.status(404).json({ message: 'Industry not found' });
    res.status(200).json(industry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Industry by ID
exports.updateIndustry = async (req, res) => {
  try {
    const { name, description, imageUrls, industryPartnerIds, location } = req.body;
    const updatedIndustry = await Industry.findByIdAndUpdate(
      req.params.id,
      { name, description, imageUrls, industryPartnerIds, location },
      { new: true }
    );
    if (!updatedIndustry) return res.status(404).json({ message: 'Industry not found' });
    res.status(200).json(updatedIndustry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an Industry by ID
exports.deleteIndustry = async (req, res) => {
  try {
    const deletedIndustry = await Industry.findByIdAndDelete(req.params.id);
    if (!deletedIndustry) return res.status(404).json({ message: 'Industry not found' });
    res.status(200).json({ message: 'Industry deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
