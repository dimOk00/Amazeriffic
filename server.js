var express = require("express"),
  http = require("http"),
  app = express(),
  toDos = [{
      "description": "Get groceries",
      "tags": ["shopping", "chores"]
    },
    {
      "description": "Make up some new ToDos",
      "tags": ["writing", "work"]
    },
    {
      "description": "Prep for Monday's class",
      "tags": ["work", "teaching"]
    },
    {
      "description": "Answer emails",
      "tags": ["work"]
    },
    {
      "description": "Take Gracie to the park",
      "tags": ["chores", "pets"]
    },
    {
      "description": "Finish writing this book",
      "tags": ["writing", "work"]
    }
  ];
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000); // этот маршрут замещает наш файл 
// todos.json в примере из главы 5
app.get("todos.json", function (req, res) {
  res.json(toDos);
});

app.post("/todos", function (req, res) {
  console.log("Данные были отправлены на сервер!"); // простой объект отправлен обратно  
  res.json({
    "message": "Вы размещаетесь на сервере!"
  });
});