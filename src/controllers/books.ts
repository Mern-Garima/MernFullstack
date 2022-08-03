import { count } from 'console';
import { Request, Response } from 'express';
import Book from '../models/book';

export const getBooks = async (req: Request, res: Response) => {
    try {
        //* Code goes here
        
const {page,limit,isbnSearch}=req.query;
if(!page){
    return res.json({ code:401,data:{},message:"Please Enter Books count"})
}
if(!limit){
    return res.json({code:401,date:{},message:"Please enter page per count"})
}
let isbn=isbnSearch as string;
const searchBook=await Book.find({isbn
    :isbn}).exec();
    
    
const books = await Book.find({
    
}).skip(parseInt(page as string)).limit(parseInt(limit as string)).exec();
const currentPage=req.query.page;
console.log("Books number",books)
const totalPages=await Book.find({
    }).count().exec();


        return res.status(200).json({
           currentPage,
           searchBook,
            totalPages,
            books,
        }); 
           } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
};



    
    
