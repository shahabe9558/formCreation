import './App.css'
import React from 'react'
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");

  // console.log("first name is " , firstName);
  // console.log("last name is " , lastName);

  // function firstNameHandler(event){
  //   setFirstName(event.target.value);
  // }
  // function lastNamehandler(event){
  //  setlastName(event.target.value);
  // }
  const [formdata, setFormdata] = useState({firstName: "", lastName: "", email: ""});

  console.log("form data is ", formdata);
  function changeHandler(event){
    // console.log(event);
    setFormdata(prevFormdata => {
      return {
        ...prevFormdata, 
        [event.target.name] : event.target.value
      }
    });
  }
  return (
    <div className='flex justify-center items-center border w-screen h-screen'>
        <form className='w-[50%] border border-yellow-400 flex flex-col space-y-4' onSubmit={changeHandler}>
            <input
              className='border border-red-900'
              type='text'
              placeholder='First Name'
              onChange={changeHandler}
              name='firstName'
              />
              <input
              className='border border-red-900'
              type='text'
              placeholder='last Name'
              onChange={changeHandler}
              name='lastName'
              />
              <input
              className='border border-red-900'
              type='email'
              placeholder='last Name'
              onChange={changeHandler}
              name='email'
              />
              <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
