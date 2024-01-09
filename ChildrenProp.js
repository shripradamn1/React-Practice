
import React from 'react';

function Nav({children}){
  return (
    <>
    <h3>Hiii</h3>
   {children}
    </>
  )
}

const App = () => {
 
  return (
    <>
   <Nav>
    <h3>hello </h3>
    <h3>Good morning</h3>
   </Nav>
    </>
  );
};

export default App;
