import {model, Schema} from 'mongoose';
const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "First name is required!"],
            minlength: [2, "Title must be at least 2 characters long!"],
            maxlength: [255, "Title must be less than 255 characters long"]
        },
        author: {
            type: String,
            required: [true, "Author is required!"],
            minlength: [2, "Author must be at least 2 characters long!"],
            maxlength: [255, "Author must be less than 255 characters long"]
        },
        pages: {
            type: String,
            required: [true, "Pages are required!"],
            min: [1, "Pages must be longer than 1!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);
const Book = model("Book", BookSchema);
export default Book;