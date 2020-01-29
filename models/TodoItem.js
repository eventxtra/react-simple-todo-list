class TodoItem {
  content = "";
  createdAt = timeStamp();
  done = false;

  constructor(content, container) {
    this.content = content;
    this.container = container;
  }

  removeTask() {
    if (this.container.todoItems.indexOf(this) != -1) {
      this.container.todoItems.splice(this.container.todoItems.indexOf(this), 1);
      this.container.saveToLS();
      this.container.container.setState({ todoList: this.container })
    }
  }

  finishTask() {
    this.done = true;
    this.container.container.setState({ todoList: this.container })
  }
}
