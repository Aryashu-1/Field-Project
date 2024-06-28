const mongoose = require('mongoose');

const IndustryPartnerSchema = new mongoose.Schema({
  industryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Industry',
    required: true
  },
  name: {
    type: String,
    required: true
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
  mail: {
    type: [String]
  },
  facultyPartnerIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FacultyPartner'
    }]
  }
});

const IndustryPartner = mongoose.model('IndustryPartner', IndustryPartnerSchema);

module.exports = IndustryPartner;
