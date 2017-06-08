'use strict';

// setup-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plugin = require('../plugin');

const setupSchema = new Schema({
  initialized: { type: Boolean, 'default': false }
});

setupSchema.plugin(plugin);

const setupModel = mongoose.model('setup', setupSchema);

module.exports = setupModel;
