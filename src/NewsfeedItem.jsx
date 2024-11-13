import React from "react";


const NewsfeedItem = ({ message }) => (
  <div className="newsfeed-item">
    <h1>@{ message.username }</h1>
    <span>reposts: { message.reposts }</span>
    <p>
      { message.text }
    </p>
    <hr></hr>
  </div>
)

export default NewsfeedItem;
