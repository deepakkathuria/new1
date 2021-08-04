import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./edit";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

//   const deleteTodo = async id => {
//     try {
//       const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
//         method: "DELETE"
//       });

//       setTodos(todos.filter(todo => todo.todo_id !== id));
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const getTodos = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/todos");
//       const jsonData = await response.json();

//       setTodos(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getTodos();
//   }, []);

//   console.log(todos);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>NAME</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(student => (
            <tr key={student.student_id}>
              <td>{student.name}</td>
              <td>
                <EditTodo student={student} />
              </td>
              {/* <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
