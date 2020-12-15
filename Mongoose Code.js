const mongoose =  require("mongoose");
mongoose.connect('mongodb://localhost:27017/studentsDB', {useNewUrlParser : true , useUnifiedTopology : true});

//Schema
const fruitSchema = new mongoose.Schema({name : String , rating : Number});
const Fruit = new mongoose.model("fruit"  , fruitSchema);
const fruit = new Fruit({
  name : "Apple",
  rating : 10
})
