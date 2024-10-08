import http from "http";
import { TodoListService } from "./todolist-service.mjs";

const service = new TodoListService();
http
  .createServer((req, res) => {
    // res.write("Todolist API");
    switch (req.method) {
      case "GET":
        service.getTodoList(req, res);
        break;
      case "POST":
        service.postTodoList(req, res);
        break;
      case "PUT":
        service.putTodoList(req, res);
        break;
      case "DELETE":
        service.delTodoList(req, res);
        break;

      default:
        break;
    }
  })
  .listen(3000);
