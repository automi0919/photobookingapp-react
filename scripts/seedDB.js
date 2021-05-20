const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/photoschedule");

const appSeed = [
  {
    firstName: "Heather",
  },
  {
    firstName: "Cameron",
  },
  {
    firstName: "David",
  }

];

db.Appointment.remove({})
  .then(() => db.Appointment.collection.insertMany(appSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
