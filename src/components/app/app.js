import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import AddForm from '../add-form';

export default class App extends Component {
  // const [count, setCount] = useState(0)
  _maxId = 100;
  state = {
    todoData: [
      this.createItem("Drink Coffee"),
      this.createItem("Make Awesome App"),
      this.createItem("Have a lunch"),
    ],
    search: "",
    filter: "all",
  };

  onFilterchange = (filter) => {
    this.setState({ filter });
  };

  filterItrems(items, filter) {
    if (filter === "all") {
      return items
    } else if(filter === "active"){
      return items.filter((item) => !item.done)
    }else if(filter === "done"){
      return items.filter((item) => item.done)
    }
  }

  onSearchange = (event) => {
    this.setState({ search: event.target.value })
  }

  searchItems(items, search) {
    return items.filter(({ label }) => {
      return label.toLowerCase().indexOf(search.toLowerCase()) > -1
    });
  };

  createItem(label) {
    return {
      label,
      important: false,
      id: this._maxId++,
      done: false,
    };
  };

  toggleProperty = (arr, id, propname) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx]
    const value = !oldItem[propname];

    const item = { ...this.state.todoData[idx], [propname]: value }

    return[
      ...arr.slice(0, idx), item, ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState((state) => {
      const newItems = this.toggleProperty(state.todoData, id, "important")
      return {
        todoData: newItems
      }
    })
  }

  onToggleDone = (id) => {
    this.setState((state) => {
      const newItems = this.toggleProperty(state.todoData, id, "done")
      return {
        todoData: newItems
      }
    })
  }

  deleteItem = (id) => {
    console.log("Delete", id);

    this.setState(({ todoData }) => {
      const newList = todoData.filter((el) => el.id !== id);

      return {
        todoData: [...newList]
      };
    });
  };
  addItem = (label) => {
    console.log("Todo added");

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createItem(label)],
      }
    })

  }
  render() {
    const { todoData, search, filter } = this.state

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount

    const visibleItems = this.searchItems(this.filterItrems(todoData, filter), search)
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearchange} />
          <ItemStatusFilter filter={filter} onFilterchange={this.onFilterchange} />
        </div>

        <TodoList
          todos={visibleItems}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddForm addposts={this.addItem} />
        {/* <p>{count}</p>
      <button className="btn btn-outline-secondary btn-sm "  onClick={()=> setCount(count + 1)}>plus</button>
      <button  className="btn btn-outline-info btn-sm"  onClick={()=> setCount(count - 1)}>minus</button> */}
      </div>
    );
  }
};
