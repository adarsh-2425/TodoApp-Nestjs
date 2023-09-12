import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoDto } from 'src/dto/todo.dto';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService){}

    //Get all todos
    @Get()
    findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Todo> {
        return this.todoService.findOne(id);
    }

    @Post()
    create(@Body() todoDto: TodoDto): Promise<Todo> {
        return this.todoService.create(todoDto)
    }

    @Put(':id')
    update(@Body() todoDto: TodoDto, @Param('id') id): Promise<Todo> {
        return this.todoService.update(id, todoDto)
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Todo> {
        return this.todoService.delete(id)
    }
}
