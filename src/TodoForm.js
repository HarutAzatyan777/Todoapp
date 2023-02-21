import { useState } from "react"


function TodoForm({onAdd}){
const[text,setText]= useState("")

return(
<form onSubmit={(e)=>{
    e.preventDefault();
    onAdd(text);
    setText("")
}} className="form">
   
    <input type="text" value={text} onChange={(e)=>{
        setText(e.target.value)
    }} className="input1" />
    <button className="button1">Add</button>
</form>
    )
}
export default TodoForm