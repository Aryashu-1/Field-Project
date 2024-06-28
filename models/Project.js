const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ide: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  industryPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'IndustryPartner'
  },
  facultyPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FacultyPartner'
  },
  studentPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  imageUrls: {
    type: [String]
  },
  researchPublicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ResearchPublication'
  },
  isCollaboration: {
    type: Boolean,
    default: false
  },
  isConsultancy: {
    type: Boolean,
    default: false
  },
  industryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Industry'
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
