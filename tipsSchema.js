import mongoose from 'mongoose';

const tipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  tip: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Tip = mongoose.model('Tip', tipSchema);

export default Tip;  // Change this to default export
