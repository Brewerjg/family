import React from 'react'
import Navbar from '../components/Navbar2';
import { useState } from 'react';
import Create from '../components/create';



const AddImg = () => {
    const [image, setImage] = useState([]);

    
  return (
    <div>
        <Navbar/>
        <Create/>
    </div>
  )
  }

export default AddImg