const mongoose = require('mongoose');

const FacultyPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roomNo: {
    type: String
  },
  details: {
    type: String,
    required: true
  },
  socialMedia: {
    type: [String]
  },
  contact: {
    type: [String]
  },
  department: {
    type: [String]
  },
  role: {
    type: [String]
  },
  mail: {
    type: [String]
  },
  studentIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  }
});

const FacultyPartner = mongoose.model('FacultyPartner', FacultyPartnerSchema);

module.exports = FacultyPartner;
