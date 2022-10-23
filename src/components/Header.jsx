import React from 'react'
import { Badge, FormControl, Navbar, Button } from 'react-bootstrap'
import { FiShoppingCart } from "react-icons/fi"
import { AiFillDelete } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../context/Context"

function Header() {
  
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();


  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Shopping Cart</Navbar.Brand>
        <Navbar.Text className="search">
            <FormControl style={{width: 400}} 
            placeholder="Search a product"
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
              }}
            />
        </Navbar.Text>
        <Nav>
            <Dropdown>
              <Dropdown.Toggle style = {{marginRight: 20}} variant="success" id="dropdown-basic">
                  <FiShoppingCart color="white" fontSize="25px"/>
                  <Badge bg='none'>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu>

                {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>${prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
              </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Container>
  </Navbar>
  )
}

export default Header