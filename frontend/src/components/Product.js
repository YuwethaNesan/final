import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card className="productsub my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img className='cardimg' src={product.image} variant="top" />
      </Link>
      <Card.Body className='cardbody'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h4">Rs {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
