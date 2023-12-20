import React from 'react';
import {nanoid} from 'nanoid';

export default function Todo() {

    const[todo,setTodo]=React.useState([]);
    const[input ,setInput]=React.useState("");


    function handleClose(id){
     
        setTodo((todo) =>todo.filter((t)=>t.id!==id));
       
        
    };


function handleSubmit(){
    setTodo(todo => 
       todo.concat({
        text:input,
        id:nanoid()
       })
    );
        setInput("");
};
function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className='container'>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} 
      onKeyPress={handleKeyPress} 
            placeholder='          Enter Task TODO'/>
            <button onClick={handleSubmit}>Submit</button>


        <ul className="todos-list">
            {
                todo.map(({text,id})=>{
                    return (
                    <li key={id} className='todo'>
                        <span>{text}</span>
                        <button className='close' onClick={()=>handleClose(id)}>X</button>
                    </li>
                 ) 
                 })
            }
        </ul>

          
   </div>
  )
}
