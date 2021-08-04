import { useState } from 'react';
import './App.css';
import axios from 'axios'
// import ListTodos from "./component/List";


function App() {
  const [name, setname] = useState("");
  const [country, setcountry] = useState("");
  const [rollno, setrollno] = useState(0);


  const [studentList,setstudentList] = useState([]);
  const [newstudentList,newsetstudentList] = useState("");



  const addstudent = () =>{
    axios.post('http://localhost:5001/create',{
      name: name,
      rollno:rollno,
      country:country}).then(()=>{
        console.log("sucesss");
      })
  };

  const getstudent = () =>{
    axios.get('http://localhost:5001/student').then((response)=>{
        setstudentList(response.data)
      })
  };
  // const editstudent = () =>{
  //   axios.put('http://localhost:5001/update/${student.student_id}').then((response)=>{
  //       newsetstudentList(response.data)
  //     })
  // };
  const editstudent = ({ student })=> async e => {
    e.preventDefault();
    try {
      const body = { name ,rollno,country};
      const response = await fetch(
        `http://localhost:5000/student/${student.form_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };


  return (
    <div className="App">
      <div className="form">
         <label>Name</label>
         <input type="text" 
         placeholder="Enter Name"
           onChange ={(event) => {
             setname(event.target.value);
           }}
         />
         <label>Country</label>
         <input type="text" 
         placeholder="Enter Country"
         onChange ={(event) => {
             setcountry(event.target.value);
         }}
         />
         <label>Roll Number</label>
         <input type="number" 
         placeholder="Enter rollno"
         onChange ={(event) => {
             setrollno(event.target.value);
         }}
         />
         <button onClick={addstudent}>ADD STUDENT</button>
         <button onClick={getstudent}>SHOW STUDENT</button>
         {studentList.map((val,keys)=>{
           return(
             <div className="employee">
             <h3>{val.name}</h3>
             <h3>{val.rollno}</h3>
             <h3>{val.country}</h3>
             <input type="text" placeholder="change name" onChange={(e)=>{
              newsetstudentList(e.target.value)
             }}/>
            
             <button 
            //  data-target={`#id${student.form_id}`}
             onClick={editstudent}>EDIT
             </button>
      

             </div>
            
           )

         })};
  
      </div>
   </div>
  );
}

export default App;
