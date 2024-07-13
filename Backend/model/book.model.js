import mongoose from "mongoose";

//This line creates a model called Book using the schema bookSchema. 
const bookSchema=mongoose.Schema({
    //kya kya data hum apne database mein bhejenge
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
//The mongoose.model method compiles the schema into a model, 
//which is a class with which we construct documents.
const Book=mongoose.model("Book",bookSchema);

export default Book;
//To summarize, this code defines a Book model using Mongoose. 
//The schema specifies that each book will have a name, price, category, image, and title. 
//The model is then exported for use in other parts of the application, 
//allowing you to create, read, update, and delete (CRUD) operations on books
// within the MongoDB database.