import React from 'react';

 import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>{props.firstname}{props.lastname}</p>
       </div>
       <div className="Add">
            <button className="Add">Add</button>
       </div>
       <div className="Reset">
       <button className="Reset">Reset</button>
       </div>
    )
};

export default person;