import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>){}

    // All todos
    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find();
    }

    // One todo
    async findOne(id: string): Promise<Todo> {
        return await this.todoModel.findById(id)
    }

    // Create todo
    async create(todo: Todo): Promise<Todo> {
        const newTodo = new this.todoModel(todo);
        return await newTodo.save();
    }

    // Update todo
    async update(id: string, todo: Todo): Promise<Todo> {
        return this.todoModel.findByIdAndUpdate(id, todo, { new: true })
    }

    // Delete todo
    async delete(id: string): Promise<Todo> {
        return this.todoModel.findByIdAndDelete(id);
    }
}
