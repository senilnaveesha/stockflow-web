import React from 'react'
import { usenvaigate } from 'react-router-dom';

import Button from "../ui/Button.jsx";

function TopNav() {
  const navigate = useNavigate();
  return (
    <div className= "flex justify-between h-16 bg-gray-800 border-b border-gray-600 px-6 hover:cursor-pointer">

        <div onClick={() => navigate('/')} >Stockflow</div>
        <Button onClick={() => navigate('/login')}>Login</Button>

    </div>
  )
}

export default TopNav