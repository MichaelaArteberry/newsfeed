import React from 'react'
import NewsfeedItem from './NewsfeedItem';

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

  const handleRepostButtonClick = (message) => {
    alert(`You reposted a message by ${message.username}.`)
  }

  return (
    <div className='d-flex flex-column align-items-center m-5'>
      {
        messages.map(msg => (
          <NewsfeedItem
            key={msg.text}
            message={msg}
            onRepostButtonClick={(message) => handleRepostButtonClick(message)}
          ></NewsfeedItem>
        ))
      }
    </div>
  )
}

export default Newsfeed;
