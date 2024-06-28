const Visit = require('../models/Visit');

// Create a new Visit
exports.createVisit = async (req, res) => {
  try {
    const { name, date, description, imageUrls, industryId, industryPartnerId, studentId, facultyPartnerId } = req.body;
    const newVisit = new Visit({
      name,
      date,
      description,
      imageUrls,
      industryId,
      industryPartnerId,
      studentId,
      facultyPartnerId
    });
    await newVisit.save();
    res.status(201).json(newVisit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Visits
exports.getAllVisits = async (req, res) => {
  try {
    const visits = await Visit.find();
    res.status(200).json(visits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Visit by ID
exports.getVisitById = async (req, res) => {
  try {
    const visit = await Visit.findById(req.params.id);
    if (!visit) return res.status(404).json({ message: 'Visit not found' });
    res.status(200).json(visit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Visit by ID
exports.updateVisit = async (req, res) => {
  try {
    const { name, date, description, imageUrls, industryId, industryPartnerId, studentId, facultyPartnerId } = req.body;
    const updatedVisit = await Visit.findByIdAndUpdate(
      req.params.id,
      { name, date, description, imageUrls, industryId, industryPartnerId, studentId, facultyPartnerId },
      { new: true }
    );
    if (!updatedVisit) return res.status(404).json({ message: 'Visit not found' });
    res.status(200).json(updatedVisit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Visit by ID
exports.deleteVisit = async (req, res) => {
  try {
    const deletedVisit = await Visit.findByIdAndDelete(req.params.id);
    if (!deletedVisit) return res.status(404).json({ message: 'Visit not found' });
    res.status(200).json({ message: 'Visit deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
