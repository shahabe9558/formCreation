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
  const [formdata, setFormdata] = useState({ firstName: "", lastName: "", email: "", comments: "", isvisible: false, mode: "online-mode", favCar:"" });

  console.log("form data is ", formdata);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormdata(prevFormdata => {
      return {
        ...prevFormdata,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }


  function submitHandler(event){
    event.preventDefault();
    console.log("Finally all data has been submitted");
    console.log(formdata);
  }
  // function changeHandler(event){
  //   // console.log(event);
  //   setFormdata(prevFormdata => {
  //     return {
  //       ...prevFormdata, 
  //       [event.target.name] : event.target.value
  //     }
  //   });
  // }
  return (
    <div className='flex justify-center items-center border w-screen h-screen'>
      <form className='w-[50%] border border-yellow-400 flex flex-col space-y-4' onSubmit={submitHandler}>
        <input
          className='border border-red-900'
          type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name='firstName'
          value={formdata.firstName}
        />
        <input
          className='border border-red-900'
          type='text'
          placeholder='last Name'
          onChange={changeHandler}
          name='lastName'
          value={formdata.lastName}
        />
        <input
          className='border border-red-900'
          type='email'
          placeholder='Email'
          onChange={changeHandler}
          name='email'
          value={formdata.email}
        />
        <textarea
          placeholder='Enter your details'
          onChange={changeHandler}
          name='comments'
          value={formdata.comments}
        />
        <fieldset>
              <label htmlFor='isvisible'>Am I visible ?</label>
              <input
                type='checkbox'
                onChange={changeHandler}
                name='isvisible'
                id='isvisible'
                checked={formdata.isvisible}
              />

              <input
                type='radio'
                onChange={changeHandler}
                name='mode'
                value={"online-mode"}
                id='online-mod'
                checked={formdata.mode === "online-mode"}
              />
              <label htmlFor='online-mod'>Online mode</label>

              <input
                type='radio'
                onChange={changeHandler}
                name='mode'
                value={"offline-mode"}
                id='offline-mod'
                checked={formdata.mode === "offline-mode"}
              />
              <label htmlFor='offline-mod'>offline mode</label>
        </fieldset>

         <label htmlFor='favCar'>Tell me your favourite Car</label>
         <select
         name='favCar'
         id='favCar'
         value={formdata.favCar}
         onChange={changeHandler}
         >  
              <option value="defender">defender</option>
              <option value="fortuner">fortuner</option>
              <option value="thar">thar</option>
              <option value="legender">legender</option>
            
         </select>
        <button>Submit Here</button>
      </form>
    </div>
  );
}

export default App;
