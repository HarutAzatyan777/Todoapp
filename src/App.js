
import {  useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFuuter';
// import TodoApp from './todoimg';
import TodoList from './TodoList';

function reducer(state,action){
if(action.type === "add"){
  return[
    ...state,
    {
      id:Math.random(),
      text:action.payload.text,
      isCompleted:false
    }
  ];
}else if(action.type === "delete"){
  return state.filter(((t)=> t.id !== action.payload.id))
}
}

function useReducer(reducer,initialState){
  const[state, setState]=useState(initialState)
  return [state,(action)=>{
   const newState = reducer(state,action);
   setState(newState)
  }]

}

function App() {
const[todos,dispatch]=useReducer(reducer,[
  {
    id:Math.random(),
    text:"Learn Js",
    isCompleted: false
  },
  {
    id:Math.random(),
    text:"Learn Node",
    isCompleted: false
  },
  {
    id:Math.random(),
    text:"Learn css",
    isCompleted: false
  },
])

  

  return (

    

    <div className="App">
      
      {/* <TodoApp /> */}
      <TodoForm onAdd={(text)=>{
        dispatch({
          type: 'add',
          payload:{
            text:text
          }
        })
        
      }}/>
<TodoList 
todos={todos}
onDelete={(todo)=>{

  dispatch({
    type:"delete",
    payload:
    {id:todo.id
}
})
  
}}
onChange={(newTodo)=>{
  // setTodos(todos.map((todo)=>{
  //   if(todo.id === newTodo.id){
  //     return newTodo
  //   }
  //   return todo
  // }))
}}
/>
<TodoFooter todos={todos} onClearCompleted={()=>{
// setTodos(todos.filter((todo)=> !todo.isCompleted))
}} />
    </div>
  );
}

export default App;
