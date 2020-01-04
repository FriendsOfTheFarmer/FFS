import React from 'react';

const AComponent = (props) => {
  return (
    <div>
      <p>{String(props.display)}</p>
      <button onClick={()=> props.anAction() } type='button'>Copy Something Does Nothing</button>
    </div>
  )
}

export default AComponent;