import Book from "../model/book.model.js"

export const getBook=async(req,res)=>{
    try {
        const book= await Book.find()
        //This line uses the Mongoose Book model to 
        //fetch all documents from the Book collection in the MongoDB database.
        //hum apne modal mein data find krre h
        res.status(200).json(book)
        //If the find operation is successful, this line sends a response with
        // status code 200 (OK) and a JSON body containing the array of book documents
    } catch (error) {
        console.log("error:",error)
        res.status(500).json(error)
    }
}