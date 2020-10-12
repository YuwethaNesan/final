import React, { useEffect } from "react";
//import products from "./../products";
import { Col, Row } from "react-bootstrap";
import Product from "./../components/Product";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./../actions/productAction";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import Paginate from "./../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
import Meta from "./../components/Meta";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
// import SearchBox from "../components/Searchbox";
function HomeScreen({ match }) {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
   <div className='cardbg'>
        <Link to="/">
        <i class="fa fa-hand-o-left" aria-hidden="true"></i>
        </Link>
        {/* <Route
                render={({ history }) => <SearchBox history={history} />}
              /> */}
      <h2 className='key'>{keyword}</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col className='productmain' sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword && keyword ? keyword : ""}
          />
        </>
      )}
      </div>
    </>
  );
}

export default HomeScreen;
