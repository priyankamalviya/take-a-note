import React from 'react';

const Repos = ({repos}) =>{
  var headerStyle={
    fontSize: 30,
     color: "#fff",
     textTransform: "uppercase",
     fontWeight: 300,
     textAlign: "center",
     marginBottom: 15,
  },
  contentColor ={
    background: "transparent"
  },
  pStyle={
    color: "#fff",
  }
  return(
    <div >
      <h3 style={headerStyle}>User Repos </h3>
      <ul className="list-group" >
        {repos.map((repo, index) => {
            return(
              <li style={contentColor} className="list-group-item" key={index} >
                {repo.html_url && <h4><a href={repo.html_url} >{repo.name}</a></h4>}
                {repo.description && <p style={pStyle}> {repo.description}</p>}
              </li>
            )
        })}
        </ul>
    </div>
  )
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
}

export default Repos;
