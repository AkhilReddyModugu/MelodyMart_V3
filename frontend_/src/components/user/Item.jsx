import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/Item.css';

function Items(props) {
    function handleRemove(id){
        props.onRemove(id);
    };
    
    const handleEdit = (id) => {
      props.onEdit(id);
    };

    return (
        <Card className="h-100" key={props.key}>
            <Card.Img variant="top" src={props.product.imageUrl} alt={props.product.productName} height="200px" width="200px" />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.product.productName}</Card.Title>
                <Card.Text>{props.product.description}</Card.Text>
                <Card.Text className="card-price">${props.product.price}</Card.Text>
                <Card.Text>Remaining: {props.product.quantity}</Card.Text>
                <div className="mt-auto">
                    <Button onClick={() => handleEdit(props.product.productId)} variant="primary" className="mx-1">Edit</Button>
                    <Button onClick={() => handleRemove(props.product.productId)} variant="danger" className="mx-1">Remove</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Items;
