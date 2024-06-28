const Project = require('../models/Project');

// Create a new Project
exports.createProject = async (req, res) => {
  try {
    const { name, ide, description, industryPartnerId, facultyPartnerId, studentPartnerId, imageUrls, researchPublicationId, isCollaboration, isConsultancy, industryId } = req.body;
    const newProject = new Project({
      name,
      ide,
      description,
      industryPartnerId,
      facultyPartnerId,
      studentPartnerId,
      imageUrls,
      researchPublicationId,
      isCollaboration,
      isConsultancy,
      industryId
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Project by ID
exports.updateProject = async (req, res) => {
  try {
    const { name, ide, description, industryPartnerId, facultyPartnerId, studentPartnerId, imageUrls, researchPublicationId, isCollaboration, isConsultancy, industryId } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, ide, description, industryPartnerId, facultyPartnerId, studentPartnerId, imageUrls, researchPublicationId, isCollaboration, isConsultancy, industryId },
      { new: true }
    );
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Project by ID
exports.deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
