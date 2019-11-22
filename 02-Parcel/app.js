import React from 'react';
import Navbar from './components/Navbar';

// The App component
export default () => {
    return (
        <Navbar />
    )
};

export const Welcome = ({...props}) => {
    return <>
          <h1> Hello, {props.name} </h1>
          <h1> {props.title}</h1>
          </>
  }
