var mongoose = require('mongoose');
var BirthdaySchema = new mongoose.Schema({
  date: String,
});
mongoose.model('Birthday', BirthdaySchema);
