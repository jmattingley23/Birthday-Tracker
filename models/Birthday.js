var mongoose = require('mongoose');
var BirthdaySchema = new mongoose.Schema({
  name: String,
  date: String,
});
mongoose.model('Birthday', BirthdaySchema);
