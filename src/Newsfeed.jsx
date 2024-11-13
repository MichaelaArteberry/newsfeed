import React from "react";
import NewsfeedItem from "./NewsfeedItem";

const Newsfeed = () => {

  const messages = [
    {
      username: 'mittensTheCat',
      reposts: 342,
      text: "I'm feeling peckish, does anyone have any MeowMix for me?"
    },
    {
      username: 'miniTiger',
      reposts: 93,
      text: "Funny how the humans think they are in control of the house."
    },
    {
      username: 'dustpawTom',
      reposts: 832,
      text: "The new scratching posts are out!  Keep an eye out for my latest reviews."
    }
  ]

  return (
    <div className="newsfeed">
      {
        messages.map(msg => <NewsfeedItem
          key={msg.text}
          message={msg}
        ></NewsfeedItem>)
      }
    </div>
  )
};

export default Newsfeed;
