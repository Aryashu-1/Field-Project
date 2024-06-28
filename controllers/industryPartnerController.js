const IndustryPartner = require('../models/IndustryPartner');

// Create a new Industry Partner
exports.createIndustryPartner = async (req, res) => {
  try {
    const { industryId, name, details, socialMedia, contact, mail, facultyPartnerIds } = req.body;
    const newIndustryPartner = new IndustryPartner({
      industryId,
      name,
      details,
      socialMedia,
      contact,
      mail,
      facultyPartnerIds
    });
    await newIndustryPartner.save();
    res.status(201).json(newIndustryPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Industry Partners
exports.getAllIndustryPartners = async (req, res) => {
  try {
    const industryPartners = await IndustryPartner.find();
    res.status(200).json(industryPartners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Industry Partner by ID
exports.getIndustryPartnerById = async (req, res) => {
  try {
    const industryPartner = await IndustryPartner.findById(req.params.id);
    if (!industryPartner) return res.status(404).json({ message: 'Industry Partner not found' });
    res.status(200).json(industryPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Industry Partner by ID
exports.updateIndustryPartner = async (req, res) => {
  try {
    const { industryId, name, details, socialMedia, contact, mail, facultyPartnerIds } = req.body;
    const updatedIndustryPartner = await IndustryPartner.findByIdAndUpdate(
      req.params.id,
      { industryId, name, details, socialMedia, contact, mail, facultyPartnerIds },
      { new: true }
    );
    if (!updatedIndustryPartner) return res.status(404).json({ message: 'Industry Partner not found' });
    res.status(200).json(updatedIndustryPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an Industry Partner by ID
exports.deleteIndustryPartner = async (req, res) => {
  try {
    const deletedIndustryPartner = await IndustryPartner.findByIdAndDelete(req.params.id);
    if (!deletedIndustryPartner) return res.status(404).json({ message: 'Industry Partner not found' });
    res.status(200).json({ message: 'Industry Partner deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
