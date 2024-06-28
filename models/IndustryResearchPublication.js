const mongoose = require('mongoose');

const IndustryResearchPublicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  facultyPartners: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FacultyPartner'
    }]
  },
  industryPartners: {
    type: [String]
  },
  studentIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  },
  publicationType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  details: {
    type: String
  },
  paperPdfLink: {
    type: String
  }
});

const IndustryResearchPublication = mongoose.model('IndustryResearchPublication', IndustryResearchPublicationSchema);

module.exports = IndustryResearchPublication;
