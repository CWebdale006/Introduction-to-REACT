import React from 'react';
import Navbar from './components/Navbar';

// rfc - react functional component 
export function MyComponent(props) {
  return (
    <>
    {props.children}
    </>
  );
}



// The App component
export default () => {
    return (
        <>
        <Navbar title="Mango Airlines" logo="" homePage=""/>
        <MyComponent>
            hi
        </MyComponent>
        </>
    )
};

export const Welcome = ({...props}) => {
    return <>
          <h1> Hello, {props.name} </h1>
          <h1> {props.title}</h1>
          </>
  }
