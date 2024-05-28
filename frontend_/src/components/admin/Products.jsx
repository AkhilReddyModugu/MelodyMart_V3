import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Item from '../common/Item'; // Ensure the correct path to your Items component
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch data from the server or any data source
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/admin/products'); 
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, []);

    const handleRemove = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5001/api/admin/products/${id}`);
            if (response.status === 200) {
                // If successful, update the local state to remove the deleted product
                setProducts(products.filter(product => product.productId !== id));
                console.log(`Product with ID ${id} deleted successfully.`);
            } else {
                console.error(`Failed to delete product with ID ${id}.`);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEdit = (id) => {
        // Logic to edit the item
        console.log(`Editing item with id: ${id}`);
        // Implement edit logic as needed
    };

    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col key={product.productId} md={4} className="mb-4">
                        <Item 
                            product={product}
                            onRemove={handleRemove}
                            onEdit={handleEdit}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Products;
