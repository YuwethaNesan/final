import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
import { listProductDetails, updateProduct } from "../actions/productAction";
// import ImageUpload from '../components/Image';

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(true);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInSock);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler = async (e) => {
    
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
 

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };

  return (
    <>
      <Link to="/admin/productlist" className="mybtnproup">
        Go Back
      </Link>
      
      <FormContainer className="myformedit">
      <div className='myformedit'>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && (
          <Message variant="danger">{`Fill all the fields`}</Message>
        )}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              {/* <Form.Label>Name</Form.Label> */}
              <div class="input-container">
              <i class="fa fa-signature icon"></i>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control></div>
            </Form.Group>

            <Form.Group controlId="price">
              {/* <Form.Label>Price</Form.Label> */}
              <div class="input-container">
              <i class="fa fa-money icon"></i>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control></div>
            </Form.Group>

            <Form.Group controlId="image">
              {/* <Form.Label>Image</Form.Label> */}
              <div class="input-container">
              <i class="fa fa-file-image-o icon"></i>
              <Form.Control
                placeholder="Enter image url"
                value={image}
                multiple
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                multiple
                onChange={uploadFileHandler}
              ></Form.File></div>
              {uploading}
              {/* <ImageUpload /> */}
            </Form.Group>

            <Form.Group controlId="brand">
              {/* <Form.Label>Brand</Form.Label> */}
              <div class="input-container">
              <i class="fa fa-copyright icon"></i>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control></div>
            </Form.Group>

            <Form.Group controlId="countInStock">
              {/* <Form.Label>No Of Materials</Form.Label> */}
              <div class="input-container">
              <i class="fa fa-sort icon" aria-hidden="true"></i>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control></div>
            </Form.Group>

            <Form.Group controlId="category">
              {/* <Form.Label>Category</Form.Label> */}
              <div class="input-container">
              <i class="fa fa-list-alt icon" aria-hidden="true"></i>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control></div>
            </Form.Group>

            <Form.Group controlId="description">
              {/* <Form.Label></Form.Label> */}
              <div class="input-container">
              <i class="fa fa-info-circle icon"></i>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control></div>
            </Form.Group>

            <Button type="submit" className='up mybtnproup content-align-left'>
              Update
            </Button>
          </Form>
        )}
        </div>
      </FormContainer>
      
    </>
  );
};

export default ProductEditScreen;
