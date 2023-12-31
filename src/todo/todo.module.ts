import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { TodoService } from './todo.service';
import { TodoSchema } from './schemas/todo.schema';
import { TodoController } from './todo.controller';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Todo', schema: TodoSchema}])],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {}
