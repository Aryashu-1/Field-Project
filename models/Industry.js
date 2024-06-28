const mongoose = require('mongoose');

const IndustrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrls: {
    type: [String],
    required: true
  },
  industryPartnerIds: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'IndustryPartner'
    }]
  },
  location: {
    type: String,
    required: true
  }
});

const Industry = mongoose.model('Industry', IndustrySchema);

module.exports = Industry;
