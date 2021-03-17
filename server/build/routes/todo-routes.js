"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoRouter = express_1.Router();
/*
    ** route
    @ /API/todos
*/
todoRouter.get('/todos', () => { });
exports.default = todoRouter;
