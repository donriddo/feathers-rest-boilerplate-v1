'use strict';

// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plugin = require('../plugin');

const userSchema = new Schema({
  facebookId: { type: String },
  facebook: { type: Schema.Types.Mixed },
  googleId: { type: String },
  google: { type: Schema.Types.Mixed },
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
  role: {type: String, enum: ["saas", "admin", "customer"], 'default': "customer"}
});

userSchema.plugin(plugin);

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
