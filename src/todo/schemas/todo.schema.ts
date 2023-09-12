import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})