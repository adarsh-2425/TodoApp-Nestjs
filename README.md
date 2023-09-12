# TodoApp API

This is a TodoApp API built with NestJS and MongoDB. It provides endpoints for managing your todo items.

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB
- NestJS

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/adarsh-2425/TodoApp-Nestjs.git
   cd your-todoapp-api
   ```
2. Install dependencies:
    ```shell
    npm i
    ```

3. Configure your MongoDB connection in src/config/keys.ts.

4. Start the server
    ```shell
    npm start
    ```


## API Endpoints

### Get All Todos
- URL: /todo
- Method: GET
- Description: Get a list of all todos.
- Response: JSON array of todo items.

### Get Todo by ID
- URL: /todo/:id
- Method: GET
- Description: Get a specific todo by its ID.
- Response: JSON object of the todo item.
### Create a Todo
- URL: /todo
- Method: POST
- Description: Create a new todo item.
- Request Body: JSON object with todo details.
- Response: JSON object of the created todo item.
### Update a Todo
- URL: /todo/:id
- Method: PUT
- Description: Update a specific todo by its ID.
- Request Body: JSON object with updated todo details.
- Response: JSON object of the updated todo item.
### Delete a Todo
- URL: /todo/:id
- Method: DELETE
- Description: Delete a specific todo by its ID.
- Response: JSON object with a message indicating success.