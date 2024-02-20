import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Product from './Product';

export const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://assets.fc-dev.instore.oakley.com/assets/products/products.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []);

  return (
   <main id='main'>
    <Container>
      <Row>
          {products?.map((product) => {
            return (
              <Col key={product.name} xs={6} sm={4} md={3}>
               <Product {...product} />
              </Col>
            )
          })}
        </Row>
      </Container>
   </main>
  );
};

export default Main;