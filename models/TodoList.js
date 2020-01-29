class TodoList {
  constructor(name, container) {
    this.name = name;
    this.container = container;
    this.loadFromLS();
  }

  loadFromLS() {
    var plainList = JSON.parse(localStorage.getItem(this.name) || '[]');
    this.todoItems = [];
    for (var i = 0; i < plainList.length; i++){
      var item = new TodoItem(plainList[i].content, this);
      item.createdAt = plainList[i].createdAt;
      item.done = plainList[i].done;
      this.todoItems.push(item);
    }
    return this;
  }

  saveToLS() {
    var plainList = [];
    for (var i = 0; i < this.todoItems.length; i++){
      plainList.push({
        "content": this.todoItems[i].content,
        "createdAt": this.todoItems[i].createdAt,
        "done": this.todoItems[i].done
      });
    }
    localStorage.setItem(this.name, JSON.stringify(plainList));
    return this;
  }

  addTask(content) {
    this.todoItems.push(new TodoItem(content, this));
    this.saveToLS();
    this.container.setState({ todoList: this })
  }
}
