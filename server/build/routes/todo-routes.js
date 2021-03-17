"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controllers_1 = require("../controllers/todo-controllers");
const todoRouter = express_1.Router();
/*
    ** route
    @ /API/todos
*/
todoRouter.get('/todos', todo_controllers_1.getTodos);
exports.default = todoRouter;
