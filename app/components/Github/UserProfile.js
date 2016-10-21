import React from 'react';

const UserProfile = ({bio}) =>{
  var contentColor ={
    background: "transparent",
    color: "#fff"
  }
  return(
    <div >
    {bio.avatar_url && <li style={contentColor} className="list-group-item"> <img src={bio.avatar_url} className="img-rounded img-responsive"/></li>}
    {bio.name && <li style={contentColor} className="list-group-item">Name: {bio.name}</li>}
    {bio.login && <li style={contentColor} className="list-group-item">Username: {bio.login}</li>}
    {bio.email && <li style={contentColor} className="list-group-item">Email: {bio.email}</li>}
    {bio.location && <li style={contentColor} className="list-group-item">Location: {bio.location}</li>}
    {bio.company && <li style={contentColor} className="list-group-item">Company: {bio.company}</li>}
    {bio.followers && <li style={contentColor} className="list-group-item">Followers: {bio.followers}</li>}
    {bio.following && <li style={contentColor} className="list-group-item">Following: {bio.following}</li>}
    {bio.following && <li style={contentColor} className="list-group-item">Public Repos: {bio.public_repos}</li>}
    {bio.blog && <li style={contentColor} className="list-group-item">Blog: <a href={bio.blog}> {bio.blog}</a></li>}
    </div>
  )
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile;
