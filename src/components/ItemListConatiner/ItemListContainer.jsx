import './ItemListContainer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ItemListContainer({ imagen, titulo, descripcion }) {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

