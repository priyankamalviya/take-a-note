import React from 'react';

class AddNote extends React.Component{
  handleSubmit(){
   var newNote = this.note.value;
   this.note.value = '';
   this.props.addNote(newNote)
 }
  setRef(ref){
    this.note=ref;
  }

  render(){
    var contentColor ={
      background: "transparent",
      color: "#fff"
    }
    return(
      <div  className="input-group">
          <input style={contentColor} type="text" className="form-control" placeholder="Add New Note" ref={(ref) => this.setRef(ref)}/>
          <span style={contentColor} className='input-group-btn'>
            <button style={contentColor} className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
          </span>
        </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired,
}

export default AddNote;
