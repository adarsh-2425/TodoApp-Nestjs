import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import config from './config/keys'

@Module({
  imports: [MongooseModule.forRoot(config.MONGO_URI), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
