import React, { useState } from 'react'
import Todolist from './Todolist'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment'
import './style.css'
const Test = () => {


  const [todo, setTodo] = useState([])
  const [edit, setEdit] = useState(false)
  let [editindex, seteditindex] = useState()
  let [edittext, setedittext] = useState("")


  const handleClose = () => setEdit(false);
  const handleShow = (val) => setEdit(true);
  let [text, setText] = useState("")
  let addTodo = (e) => {
    e.preventDefault()
    setText(e.target.value)


  }

  const addData = () => {
  
    if (text !== "") {
      let obj = { id: todo.length, todoname: text, crateAt:moment(new Date()).format('HH:mm:ss,dd/mm/yyyy'), updatetime: 0,detail:"" }
      setTodo([...todo, obj])
      setText("")
    }
  
    
  }

  const deletefromTodo = (pos) => {
    let val = [...todo]
    val.splice(pos, 1)
    setTodo(val)
    setText("")

  }




  const updateText = (e) => {
    setedittext(e?.target?.value)


  }
  const saveData = () => {
    let inventory = todo
    inventory.forEach((x, index) => {
      if (x.id == editindex) {
        inventory[index] = { ...x, detail: edittext, updatetime: todo[editindex]?.updatetime + 1 }
      }
    })

  }

console.log(todo)
  return (
    <div>
      <div style={{textAlign:"center"}}>
      <h1 style={{color:"#ffff"}}>Add to list</h1>
      <div style={{display:"center",justifyContent:'center'}}>
      <input id="inputtext"  value={text} onChange={(e) => addTodo(e)} placeholder="Add a todo" />
      <button style={{width:"auto"}} className="Add-button" onClick={addData}>Add Todo</button>
      </div>
  
      </div>
      
      <br/>
      <Todolist todo={todo} deletefromTodo={deletefromTodo} edit={edit} handleClose={handleClose} handleShow={handleShow} seteditindex={seteditindex} />
    
      




      <Modal show={edit} onHide={handleClose} >
        <Modal.Header closeButton style={{background:"#9f4894"}}>
          <Modal.Title style={{color:"rgb(177, 222 ,239"}}>{todo[editindex]?.detail==""?"Add":"Update"} {todo[editindex]?.todoname}'s detail </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background:"rgb(210, 179, 239)"}}>

         
          <textarea id="w3review" name="w3review" rows="4" cols="50"onChange={(e) => updateText(e)}>
          {todo[editindex]?.detail}
</textarea>
        </Modal.Body>
        <Modal.Footer style={{background:"#9f4894"}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleClose(); saveData() }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>



  )
}

export default Test