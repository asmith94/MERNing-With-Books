import { Router } from "express";
import {createBook, getAllBooks, getBook, updateBooks, deleteBook} from "../controllers/book.controller.js";

const router = Router();

router.route("/books")
    .get(getAllBooks)

router.route("/books/:id")
    .get(getBook)
    .delete(deleteBook)

router.route("/add")
    .post(createBook);

router.route("/update/:id")
    .patch(updateBooks)

    export default router