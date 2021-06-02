import React from 'react';
import './style.css';


 function Button ({name, onclick}){
return <button className = "button" onClick = {onclick}>{name}</button> 
 };
 export default Button;

 