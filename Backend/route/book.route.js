import express from "express";
import { getBook} from "../controller/book.controller.js";

const router=express.Router();

//jab hum / (homepage) route p click kre toh ye function chale
router.get("/",getBook);
export default router;


