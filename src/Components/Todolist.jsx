import React from 'react'
import './style.css'

const Todolist = ({ todo, deletefromTodo, edit, handleClose, handleShow, seteditindex }) => {
  return (
    <div >


      {
        todo?.map((value, key) => (
          <>
          {console.log(Math.floor(Math.random() *key))}
          <div className='list-style'>
          <div key={key} style={{display:"flex",justifyContent:"center"}}>
              <div style={{display:"flex"}}>
                <h6  style={{
                  whiteSpace: "nowrap",
                  width: "120px", 
                  overflow:" hidden",
                  textOverflow: "ellipsis",
                  padding:"2px" 
               
              }}   >{value?.todoname}</h6>
                <p><i>{"("}update {value?.updatetime} time {")"}</i></p>
                </div>
             
              <i style={{margin:"5px"}} onClick={() => deletefromTodo(key)} class="fa-solid fa-circle-minus"></i>
              
              <i style={{margin:"5px"}}  onClick={() => { handleShow(); seteditindex(key) }} class="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
       



          </>
        ))
      }

    </div>
  )
}

export default Todolist