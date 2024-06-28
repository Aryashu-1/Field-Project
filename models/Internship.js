const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  stipend: {
    type: Number,
    required: true
  },
  workFromHome: {
    type: Boolean,
    default: false
  },
  companyDescription: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  urlImage: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  fullTime: {
    type: Boolean,
    default: false
  },
  companyLogo: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  studentIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  },
  industryPartnerIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'IndustryPartner'
    }]
  },
  facultyPartnerIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FacultyPartner'
    }]
  }
});

const Internship = mongoose.model('Internship', InternshipSchema);

module.exports = Internship;
