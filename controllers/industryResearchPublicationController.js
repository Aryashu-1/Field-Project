const IndustryResearchPublication = require('../models/IndustryResearchPublication');

// Create a new Industry Research Publication
exports.createPublication = async (req, res) => {
  try {
    const { name, facultyPartners, industryPartners, studentIds, publicationType, date, details, paperPdfLink } = req.body;
    const newPublication = new IndustryResearchPublication({
      name,
      facultyPartners,
      industryPartners,
      studentIds,
      publicationType,
      date,
      details,
      paperPdfLink
    });
    await newPublication.save();
    res.status(201).json(newPublication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Industry Research Publications
exports.getAllPublications = async (req, res) => {
  try {
    const publications = await IndustryResearchPublication.find();
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Industry Research Publication by ID
exports.getPublicationById = async (req, res) => {
  try {
    const publication = await IndustryResearchPublication.findById(req.params.id);
    if (!publication) return res.status(404).json({ message: 'Publication not found' });
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Industry Research Publication by ID
exports.updatePublication = async (req, res) => {
  try {
    const { name, facultyPartners, industryPartners, studentIds, publicationType, date, details, paperPdfLink } = req.body;
    const updatedPublication = await IndustryResearchPublication.findByIdAndUpdate(
      req.params.id,
      { name, facultyPartners, industryPartners, studentIds, publicationType, date, details, paperPdfLink },
      { new: true }
    );
    if (!updatedPublication) return res.status(404).json({ message: 'Publication not found' });
    res.status(200).json(updatedPublication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an Industry Research Publication by ID
exports.deletePublication = async (req, res) => {
  try {
    const deletedPublication = await IndustryResearchPublication.findByIdAndDelete(req.params.id);
    if (!deletedPublication) return res.status(404).json({ message: 'Publication not found' });
    res.status(200).json({ message: 'Publication deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
