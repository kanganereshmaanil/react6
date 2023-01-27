import axios from "axios";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import './Addstudent.css'

const header={"Access-Control-Allow-Origin":"*"};
const Addstudent = () => {
  const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[course,setCourse]=useState('')
    const[batch,setBatch]=useState('')
    const history=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log('clicked');
      axios.post(
          'https://63d03474e52f587829ae07a7.mockapi.io/react-use',{
          name:name, 
          age:age,
          course:course,
          batch:batch,
          header
      })

     .then(()=>{
      history("/Students")
     })
  }

  function studentaddcancel(){
    history("/Students")
  }

  return (
    <div>
      <form>
       <input type="text" className="form-control"
          onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
       <input type="number" className="form-control"
          onChange={(e)=> setAge(e.target.value)} placeholder="Age"/>
       <input type="text" className="form-control"
          onChange={(e)=> setCourse(e.target.value)} placeholder="Course" />
       <input type="text" className="form-control"
          onChange={(e)=> setBatch(e.target.value)} placeholder="Batch" />
      </form>
          <button type="submit" className="btn btn-primary btn_addstudent" onClick={handleSubmit}>
          Submit
        </button>
        <button className='btn_addstudent' id='cancelBtn' onClick={studentaddcancel}>Cancel</button>
        
    </div>
  )
}

export default Addstudent