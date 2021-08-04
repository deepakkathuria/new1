// import React, { Fragment, useState } from "react";

// const EditTodo = ({ student }) => {
//   const [description, setDescription] = useState(student.name);

//   //edit description function

//   const updateDescription = async e => {
//     e.preventDefault();
//     try {
//       const body = { name,rollno,company };
//       const response = await fetch(
//         `http://localhost:5001/student/${student.student_id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body)
//         }
//       );

//       window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <Fragment>
//       <button
//         type="button"
//         class="btn btn-warning"
//         data-toggle="modal"
//         data-target={`#id${student.student_id}`}
//       >
//         Edit
//       </button>

//       {/* 
//         id = id10
//       */}
//       <div
//         class="modal"
//         id={`id${todo.todo_id}`}
//         onClick={() => setDescription(student.name)}
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h4 class="modal-title">Edit Todo</h4>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 onClick={() => setDescription(student.name)}
//               >
//                 &times;
//               </button>
//             </div>

//             <div class="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={student.name}
//                 onChange={e => setDescription(e.target.value)}
//               />
//             </div>

//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-warning"
//                 data-dismiss="modal"
//                 onClick={e => updateDescription(e)}
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 class="btn btn-danger"
//                 data-dismiss="modal"
//                 onClick={() => setDescription(student.name)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default EditTodo;
