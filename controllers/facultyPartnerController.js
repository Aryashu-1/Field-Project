const FacultyPartner = require('../models/FacultyPartner');

// Create a new Faculty Partner
exports.createFacultyPartner = async (req, res) => {
  try {
    const { name, roomNo, details, socialMedia, contact, department, role, mail, studentIds } = req.body;
    const newFacultyPartner = new FacultyPartner({
      name,
      roomNo,
      details,
      socialMedia,
      contact,
      department,
      role,
      mail,
      studentIds
    });
    await newFacultyPartner.save();
    res.status(201).json(newFacultyPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Faculty Partners
exports.getAllFacultyPartners = async (req, res) => {
  try {
    const facultyPartners = await FacultyPartner.find();
    res.status(200).json(facultyPartners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Faculty Partner by ID
exports.getFacultyPartnerById = async (req, res) => {
  try {
    const facultyPartner = await FacultyPartner.findById(req.params.id);
    if (!facultyPartner) return res.status(404).json({ message: 'Faculty Partner not found' });
    res.status(200).json(facultyPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Faculty Partner by ID
exports.updateFacultyPartner = async (req, res) => {
  try {
    const { name, roomNo, details, socialMedia, contact, department, role, mail, studentIds } = req.body;
    const updatedFacultyPartner = await FacultyPartner.findByIdAndUpdate(
      req.params.id,
      { name, roomNo, details, socialMedia, contact, department, role, mail, studentIds },
      { new: true }
    );
    if (!updatedFacultyPartner) return res.status(404).json({ message: 'Faculty Partner not found' });
    res.status(200).json(updatedFacultyPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Faculty Partner by ID
exports.deleteFacultyPartner = async (req, res) => {
  try {
    const deletedFacultyPartner = await FacultyPartner.findByIdAndDelete(req.params.id);
    if (!deletedFacultyPartner) return res.status(404).json({ message: 'Faculty Partner not found' });
    res.status(200).json({ message: 'Faculty Partner deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
