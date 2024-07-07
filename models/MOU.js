const mongoose = require('mongoose');

const MOUSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  industryId: {
    type:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Industry'}]
  },
  validity: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  duration: {
    type: String
  },
  agreementDate: {
    type: Date
  }
});

const MOU = mongoose.model('MOU', MOUSchema);

module.exports = MOU;
