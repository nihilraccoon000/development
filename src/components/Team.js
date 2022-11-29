import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Team({team, reset}) {
  const total = team.reduce(((sum, item) => sum += item.stats), 0);
  // const color = total > 150000 ? 'red' : 'black';
  return (
    <div>
      <h3>Selected Team Members:</h3>
      <Button variant="success" onClick={reset}>reset</Button>
      <p><b>Stats total: </b>
      <span>{total}</span></p>

      <Container> 
        <Row xs={1} md={3} xl={5} className="g-4">
        {team.map((item, index) => ( 
          <Col>
              <img src={item.image} style={{height: "20vh"}}></img>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
  }
  
export default Team;