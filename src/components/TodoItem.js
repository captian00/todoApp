import React ,{ Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import check from '../check/check1.png';
import checked from '../check/check2.png';
class TodoItem extends Component{

    render(){
        const {item,onClick} = this.props;
        let url = check;
        if(item.isComplete){
            url = checked;
        }
        return(
            <div className= {classNames('TodoItem',{
                TodoItemComplete : item.isComplete 
            })}>
                <img onClick={onClick} alt='' src={url} width = {32} height = {32}/>
               <p>{this.props.item.Jobs}</p> 
            </div>
        )
    }
}
export default TodoItem;