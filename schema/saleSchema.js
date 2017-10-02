var router = require('express').Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
    rent: Number,
    cost: Number,
    sqft: Number,
    city: String
});

var Sale = mongoose.model('listings', listingSchema);

module.exports = Sale;
