const Internship = require('../models/Internship');

// Create a new Internship
exports.createInternship = async (req, res) => {
  try {
    const { companyName, stipend, workFromHome, companyDescription, jobDescription, urlImage, location, role, fullTime, companyLogo, category, studentIds, industryPartnerIds, facultyPartnerIds } = req.body;
    const newInternship = new Internship({
      companyName,
      stipend,
      workFromHome,
      companyDescription,
      jobDescription,
      urlImage,
      location,
      role,
      fullTime,
      companyLogo,
      category,
      studentIds,
      industryPartnerIds,
      facultyPartnerIds
    });
    await newInternship.save();
    res.status(201).json(newInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Internships
exports.getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Internship by ID
exports.getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) return res.status(404).json({ message: 'Internship not found' });
    res.status(200).json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an Internship by ID
exports.updateInternship = async (req, res) => {
  try {
    const { companyName, stipend, workFromHome, companyDescription, jobDescription, urlImage, location, role, fullTime, companyLogo, category, studentIds, industryPartnerIds, facultyPartnerIds } = req.body;
    const updatedInternship = await Internship.findByIdAndUpdate(
      req.params.id,
      { companyName, stipend, workFromHome, companyDescription, jobDescription, urlImage, location, role, fullTime, companyLogo, category, studentIds, industryPartnerIds, facultyPartnerIds },
      { new: true }
    );
    if (!updatedInternship) return res.status(404).json({ message: 'Internship not found' });
    res.status(200).json(updatedInternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an Internship by ID
exports.deleteInternship = async (req, res) => {
  try {
    const deletedInternship = await Internship.findByIdAndDelete(req.params.id);
    if (!deletedInternship) return res.status(404).json({ message: 'Internship not found' });
    res.status(200).json({ message: 'Internship deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
