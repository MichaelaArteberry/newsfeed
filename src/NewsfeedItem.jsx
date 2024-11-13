import React from "react";

const NewsfeedItem = ({ message, onRepostButtonClick}) => (
  <div className="newsfeed-item">
    <h1>@{message.username}</h1>
    <span>reposts: {message.reposts}</span>
    <p>
      { message.text }
    </p>
    <button onClick={() => onRepostButtonClick(message)}> Repost </button>
    <hr></hr>
  </div>
)

export default NewsfeedItem;
1
