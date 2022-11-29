import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardItem from './CardItem';

function CardList({data, onClickOp}) {
    return (
    <div>
        <Container> 
          <Row xs={1} md={2} xl={3} xxl={4} className="g-4">
            {data.map((item, index) => (
              <Col>
                <CardItem item={item} onClick={onClickOp} />
              </Col>
            ))}
          </Row>
        </Container>
    </div>
    );
  }
  
export default CardList;