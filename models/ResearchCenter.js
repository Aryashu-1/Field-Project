const mongoose = require('mongoose');

const ResearchCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  facultyPartnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FacultyPartner'
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  industryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Industry'
  },
  focus: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrls: {
    type: [String]
  },
  address: {
    type: String
  },
  industryPartnerIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'IndustryPartner'
    }]
  }
});

const ResearchCenter = mongoose.model('ResearchCenter', ResearchCenterSchema);

module.exports = ResearchCenter;
