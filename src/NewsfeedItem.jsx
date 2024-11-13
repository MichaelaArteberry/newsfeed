import React from "react";


const NewsfeedItem = ({ message }) => {

  const RepostButtonClick = (message) => {
      alert(`You reposted a message by ${message.username}`)
  }

  return(
  <div className="newsfeed-item">
      <h1>@{message.username}</h1>
      <span>reposts: {message.reposts}</span>
      <p>
      { message.text }
      </p>
      <button onClick={() => RepostButtonClick(message)}> Repost </button>
      <hr></hr>
  </div>)
}

export default NewsfeedItem;
