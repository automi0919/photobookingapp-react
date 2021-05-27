const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "firstName is required"
    },
    lastName: {
      type: String,
      trim: true,
      required: "lastName is required"
    },
    email: {
      type: String,
      trim: true,
      required: "email is required"
    },
    realtor: {
      type: Boolean
    },
    street: {
      type: String,
      required: "Street is required"
    },
    state: {
      type: String,
      required: "State is required"
    },
    zip: {
      type: String,
      required: "Zip is required"
    },
    city: {
      type: String,
      required: "City is required"
    },
    date: {
      type: String
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    },
    package: {
      type: String,
      required: "Package is required"
    },
    sq_ft: {
      type: Number,
      required: "sq_ft is required"
    },
    price: {
      type: String
    },
    photographerId: {
      type: String,
    }
  });

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
