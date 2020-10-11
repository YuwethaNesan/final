import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductScreeen from "./screens/ProductScreeen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreeen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceorderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import Begin from "./screens/begin";
function App() {
  return (
    <BrowserRouter>
      <Header />
      
     
      <main>
        <Container>
        <div className='carosal'>
          <Route exact path="/" component={Begin} />
          </div>
          <Route  path="/login" component={LoginScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route  path="/shipping" component={ShippingScreen} />
          <Route  path="/register" component={RegisterScreen} />
          <Route  path="/payment" component={PaymentScreen} />
          <Route  path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/home" component={HomeScreen} />
          <Route  path="/profile" component={ProfileScreen} />
          <Route  path="/product/:id" component={ProductScreeen} />
          <Route  path="/cart/:id?" component={CartScreen} />
          <Route  path="/admin/userlist" component={UserListScreen} />
          <Route path="/search/:keyword" component={HomeScreen}  />
          <Route  path="/page/:pageNumber" component={HomeScreen}  />
       
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            
          />
          <Route
            
            path="/admin/productlist"
            component={ProductListScreen}
          />
          <Route  path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route  path="/admin/orderlist" component={OrderListScreen} />

          <Route
            
            path="/admin/product/:id/edit"
            component={ProductEditScreen}
          />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
