import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem =(props) =>{
    const handleIncrement = (id) => {
        props.onIncrement(id);
    };

    const handleDecrement = (id) => {
        props.onDecrement(id);
    };

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.product.imageUrl} alt={props.product.productName} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{props.product.productName}</h5>
                        <p className="card-text">{props.product.description}</p>
                        <h6 className="card-price">${props.product.price}</h6>
                        <p className="card-text">Quantity: {props.product.quantity}</p>
                        <div className="mt-auto">
                            <button onClick={() => handleIncrement(props.product.productId)} className="btn btn-success mx-1">+</button>
                            <button onClick={() => handleDecrement(props.product.productId)} className="btn btn-warning mx-1">-</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
