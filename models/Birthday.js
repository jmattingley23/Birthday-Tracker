var mongoose = require('mongoose');
var BirthdaySchema = new mongoose.Scheme({
  date: String,
});
mongoose.model('Birthday', BirthdaySchema);
