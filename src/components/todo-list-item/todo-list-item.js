import React, {Component} from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './todo-list-item.css';

export default class TodoListItem extends Component{          //  ========== классовый компонент 
  
  // onImportantClick = () => {
  //   console.log(`important: ${this.props.important}`);

  //   this.setState((important) => {
  //     return{
  //       important: !this.state.important,
  //     }
  //   });
  // };

  render() {
    const  { label, done, important, onToggleDone} =this.props;
  

    let className = "todo-list-item";

    if(done) {
      className += " done ";
    }
  
      if(important) {
      className += " important ";
    };


    
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

  return (
    <span className={className}>
      <span
        className="todo-list-item-label"
        onClick={this.onToggleDone}
        >
        {label}
      </span>

      

      <div className='iconcs'>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right" onClick={onToggleDone}>
        <i className="fa fa-exclamation" />
        
    </button>

      <button type="button"
      onClick={this.props.onDelete}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-alt" />
      </button>
    </div> 

    </span>
  )
  }
}