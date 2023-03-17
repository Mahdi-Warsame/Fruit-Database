
// getting-started.js
const mongoose = require('mongoose');
const express = require("express");

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
  	type: String,
  	required:true
  },
  rating: {
  	type: Number,
  	min:1,
  	max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleScheme = new mongoose.Schema({
	name: String,
	age: Number
});

const People = new mongoose.model("People", peopleScheme);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Taste Good"
});

const kiwi = new Fruit({
	name:"Kiwi",
	rating:9,
	review:"brilliant"
});

const mango = new Fruit({
	name:"Mango",
	rating:7,
	review:"brilliant"
});


const banana = new Fruit({
	name:"Banana",
	rating: 1,
	review:"brilliant"
});

const ali = new People({
	name: "Ali",
	age:50
});

people.remove();

// Fruit.insertMany([apple, kiwi, mango, banana], function(err){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Successfully inserted to Fruits Document");
// 	}
//  });

Fruit.find(function(err, fruits){
	if(err){
		console.log(err);
	}
	
	else{
		// mongoose.connection.close();
		fruits.forEach((fruit)=>{
			console.log(fruit.name);
		});
		

	}
});

// Fruit.updateOne({_id:"63f86f9783c6a8b7ccdd9a4f"},{review:"This is awesome fruit"},(err)=>{
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log("Successfully updated element");

// 	}
// });

People.deleteMany({age:37},function(err){
	if(err){
		console.log(err)
	}else{
		console.log("Elements deleted Successfully");
		mongoose.connection.close();
		process.exit(0);
	}
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
})