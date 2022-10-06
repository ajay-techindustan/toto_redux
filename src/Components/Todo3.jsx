import React, { useState } from "react";
import {connect} from 'react-redux'
import {  useSelector } from 'react-redux'
import { todoAction } from "../redux";


const Todo3 = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.name.value 
    if(input === ''){
      return null
    }else {
    props.dispatch(todoAction(input)) 
    }
    setInput('') 
    }
  const handelChange = (e) => {
    setInput(e.target.value);
  };

  const todo = useSelector ( state => state.todo )
  console.log('todo',todo)


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="display-flex mt-5 text-center">
              <form  onSubmit={handleSubmit} >
                <input
                  name="name"
                  type="text"
                  value={input}
                  placeholder="Add your task!"
                  onChange={handelChange}
                  className=" text-dark border border-dark rounded p-1 bg-light mx-5 "
                />
                <button className="border border-primary rounded p-1 bg-primary text-dark " >
                  Add
                </button>
              </form>
            </div>
            <div className="mt-5 text-center">
              {todo.length > 0 ? (
                 todo.map((item, index) => ( 
                   <p className="mt-3 text-center text-dark p-1 bg-light border border-dark rounded"> 
                     {item}
                   </p> 
                 )) 
               ) : ( 
                 <h2>Please Add some Value First!</h2> 
               )} 
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default connect()(Todo3);
