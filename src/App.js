import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
//import TodoItem from './components/TodoItem';
import callApi from "./components/Api.js";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todoItem : [
      // {title :'Di Choi', isComplete : true},
      // {title :'Di Hoc', isComplete : false},
      // {title :'Di Tap Gym'}
      ]
    }
  }
  componentDidMount(){
    // callApi("jobs","GET",null).then(res =>{
    //   this.setState({
    //     todoItem : res.data
    //   })
    // })
    this.getData();
console.log("component");
  }

  getData(){
    try{
      callApi("jobs","GET",null).then(res => {
      this.setState({
        todoItem : res.data
      })
    //  console.log(this.state.todoItem)
    })
    }
    catch(err){
      alert(err)
    }
  }
  onItemClick(item){
    return(event) => {
      const isComplete = item.isComplete;
      callApi(`jobs/${item.id}`,"PUT",{...item,isComplete : !isComplete});
      const {todoItem} = this.state;
      const index = todoItem.indexOf(item);
      this.setState(
        {
          todoItem:[
            ...todoItem.slice(0,index),
            {
              ...item,
              isComplete : !isComplete
            },
            ...todoItem.slice(index + 1)
          ]
        }
      )
    }
  }
  render(){
    console.log("render");
    const {todoItem} = this.state;
      return(
        <div className="App">
          {
            todoItem.length && todoItem.map((item,index) =>
            <TodoItem 
            key = {index}
            item = {item}
            onClick={this.onItemClick(item)} />
            )
          }
        </div>
      );
  }
  
}
export default App;

