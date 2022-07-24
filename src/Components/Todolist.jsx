import React from 'react'
import './style.css'

const Todolist = ({ todo, deletefromTodo, edit, handleClose, handleShow, seteditindex }) => {
  return (
    <div >
{
  todo?.length>0?<>
  
  <div className='outerblock'>
{
        todo
        .map((value, key) => (
          <>
          {console.log(Math.floor(Math.random() *key))}
          <div className={(key%2)==0?'list-style':"list-style2"}  >
          <div key={key} style={{display:"flex",justifyContent:"center"}}>
              <div style={{display:"flex"}}  onClick={() => { handleShow(); seteditindex(key) }}>
                <h6  style={{
                  whiteSpace: "nowrap",
                  width: "120px", 
                  overflow:" hidden",
                  textOverflow: "ellipsis",
                  padding:"2px" 
               
              }}   > {value?.todoname}</h6>
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
  
  
  </>:<>



  <div className='outerblock'>
        <h5 style={{textAlign:"center",marginTop:"25%"}}>Add todo data</h5>
</div>
  </>
}


     

    </div>
  )
}

export default Todolist