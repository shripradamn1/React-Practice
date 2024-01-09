// App.js
import React from 'react';

function Nav({name,age,clg}){
  return (
    <>
    <h3>{name}</h3>
    <h2>{age}</h2>
    <h3>{clg}</h3>
    </>
  )
}

const App = () => {
  const obj={   //by creating obj and returning this to children components
    name:"shri",
    age:21,
    clg:"BIT"
  }
  return (
    <>
   
   
    <Nav {...obj}/>
    <hr/>
    
    </>
  );
};

export default App;
