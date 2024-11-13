import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const NewsfeedItem = ({ message, onRepostButtonClick}) => (
  <Card className="m-3 w-50">
    <Card.Body className="d-flex flex-column align-items-center">
      <Card.Title>@{message.username}</Card.Title>
      <Card.Text>reposts: {message.reposts}</Card.Text>
      <Card.Text>{message.text}</Card.Text>
      <Button variant="info" onClick={() => onRepostButtonClick(message)}> Repost </Button>
    </Card.Body>
  </Card>
)

export default NewsfeedItem;
1
