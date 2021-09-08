const mongoose = require("mongoose");
const Student = mongoose.Schema;

var students = new Student({
  email: {
    type: String,
    //required: true,
  },
  password: {
    type: String,
    //required: true,
  },
});

module.exports = mongoose.model("info", students);
