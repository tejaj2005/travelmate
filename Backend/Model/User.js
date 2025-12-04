const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
  },
  password: { 
    type: String, 
    // Required ONLY if they are NOT using social login
    required: function() { return !this.googleId && !this.facebookId; } 
  }, 
  
  // Social Login IDs (Sparse Indexes allow multiple nulls, but unique IDs)
  googleId: { type: String, unique: true, sparse: true },
  facebookId: { type: String, unique: true, sparse: true },
  
  // To track how they last logged in
  lastLoginProvider: { 
    type: String, 
    enum: ['local', 'google', 'facebook'],
    default: 'local'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);