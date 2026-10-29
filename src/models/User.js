const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    oauthId: {
      type: String,
      sparse: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    displayName: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
