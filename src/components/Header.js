import React, { Component } from "react";

class Header extends Component {
    constructor() {
      super();
  
      this.state = {
        task: {
          text: '',  
        },
        tasks: [],
      };
    }
  
    render() {
    //   const {task, tasks} = this.state;
  
      return (
        <div>
            GGWP
        </div>
        // <div>
        //   <form onSubmit={this.onSubmitTask}>
        //     <label htmlFor="taskInput">Enter task</label>
        //     <input 
        //       onChange={this.handleChange} 
        //       value={task.text} 
        //       type="text" 
        //       id="taskInput"/>
        //     <button 
        //       type="submit">
        //       Add task
        //     </button>
        //   </form>
        //   <Overview tasks={tasks} />
        // </div>
      );
    }
  }

export default Header;