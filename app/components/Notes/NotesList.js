import React from 'react';

const NotesList = ({notes}) => {
  var contentColor ={
    background: "transparent",
    color: "#fff"
  }
  return(
    <ul  className="list-group">
      {notes.map((note, index) => (
        <li style={contentColor} className="list-group-item" key={index}> {note} </li>
      ))}
    </ul>
  )
}

export default NotesList;
