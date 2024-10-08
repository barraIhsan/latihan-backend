export class TodoListService {
  todoLists = ["test", "hai"];

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todoLists.map((val, id) => {
        return {
          id: id,
          todo: val,
        };
      }),
    });
  }

  getTodoList(req, res) {
    res.end(this.getJsonTodoList());
  }

  postTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todoLists.push(body.todo);

      res.end(this.getJsonTodoList());
    });
  }

  putTodoList(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todoLists[body.id] && this.todoLists[body.id] != body.todo) {
        this.todoLists[body.id] = body.todo;
      }

      res.end(this.getJsonTodoList());
    });
  }

  delTodoList(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todoLists[body.id]) {
        this.todoLists.splice(body.id, 1);
      }

      res.end(this.getJsonTodoList());
    });
  }
}
