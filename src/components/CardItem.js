import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function CardItem({item, onClick}) {
  return (
    <>
      <Card border="secondary" style={{ width: '18rem' }}>      
          <Card.Img variant="top" src={item.image}/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Button variant="outline-secondary" onClick={() => onClick(item)}>Add to/Remove from Team</Button>
          </Card.Body>
          <ListGroup className="list-group-flush">
              <ListGroup.Item>Star: {item.star}</ListGroup.Item>
              <ListGroup.Item>Type: {item.type}</ListGroup.Item>
              <ListGroup.Item>Skill: {item.skill}</ListGroup.Item>
              <ListGroup.Item>Stats: {item.stats}</ListGroup.Item>
              <ListGroup.Item>Release Date: {item.date}</ListGroup.Item>
          </ListGroup>
      </Card>
    </>
  );
}

export default CardItem;