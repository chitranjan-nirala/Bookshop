import Book from "../model/book_modal.js"
export const getbook =async(req,res)=>{
    try {
        // find data from model
         const book = await Book.find()
         res.status(200).json(book)
    }
    catch (error){
        console.log("Error", error)
        // chack  for internal server error 
        res.status(500).json(error)
    }
}