import axios from 'axios';
import React, { useState } from 'react'


function Input({getData}) {



    const initialValue = {
        title: "",
        original_Url: "",
    }
    const [input, setInput] = useState(initialValue);

    function isValidUrl(string) {
        try {
          new URL(string);
          return true;
        } catch (err) {
          return false;
        }
      }

    // console.log(isValidUrl('www.freecodecamp.org/'));


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(input)
    }

    const handleSubmit = async () =>{
        if(isValidUrl(input.original_Url)){
            const response = await axios.post(`http://localhost:8000/create`, input);
            console.log(response)
            getData()
        }
        else{
            alert('Please enter a valid url');
        }

    }
    

  return (
    <div>
         <input type="text" name="title" placeholder='title (Optional)' id="" onChange={handleChange}/>
        <input type="text" name='original_Url' placeholder='Enter Original Url' onChange={handleChange}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Input