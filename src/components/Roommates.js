import React from 'react';
import './Todos.css';

const Roommates = (props) => {
  
  const renderTodoList = () => {
    return props.state.roommates.map((roommate, index) => (
      <li key={index}>{roommate}</li>
    ));
  };

  return (
    <div className='roommates-widgets'>
      {renderTodoList()}
    </div>
  );
}

export default Roommates;
