import React from "react";
import { Row, Col } from "antd";
import { Button, Menu, Dropdown, Icon } from "antd";
import Item from "./item";
// import Cart from "./cart";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cart: [],
      filter: null,
      size: "large"
    };
    this.clickVeg = this.clickVeg.bind(this);
    this.clickNonVeg = this.clickNonVeg.bind(this);
    this.clickAll = this.clickAll.bind(this);
  }

  componentDidMount() {
    fetch("https://demo6500368.mockable.io/food")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleAddFunc(product) {
    const existingProductIndex = this.state.cart.findIndex(
      p => p.id === product.id
    );

    console.log(existingProductIndex);

    if (existingProductIndex >= 0) {
      const cartProducts = this.state.cart.slice();

      const existingProduct = cartProducts[existingProductIndex];

      const updatedUnitsProduct = {
        ...existingProduct,
        units: existingProduct.units + product.units
      };

      console.log(updatedUnitsProduct);

      cartProducts[existingProductIndex] = updatedUnitsProduct;

      this.setState({
        cart: cartProducts
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product]
      });
    }
  }

  addItems() {
    let veg = [];
    let nonVeg = [];
    let products = null;
    if (this.state.items)
      products = JSON.parse(JSON.stringify(this.state.items));

    if (products == null) return;

    products.map(item => {
      if (item.type === "veg") {
        veg.push({
          id: item.id,
          name: item.name,
          cost: item.cost,
          picture: item.picture,
          type: item.type,
          units: item.units
        });
      } else if (item.type === "non-veg") {
        nonVeg.push({
          id: item.id,
          name: item.name,
          cost: item.cost,
          picture: item.picture,
          type: item.type,
          units: item.units
        });
      }
    });
    console.log(veg);
    console.log(this.state.filter);

    if (this.state.filter === 1) {
      products = veg;
    } else if (this.state.filter === 2) {
      products = nonVeg;
    } else {
      products = products;
    }

    console.log(products);

    return products.map(data => (
      <Col
        style={{ marginTop: "10vh" }}
        xs={{ span: 22, offset: 1 }}
        lg={{ span: 5, offset: 1.5 }}
      >
        <Item
          id={data.id}
          name={data.name}
          cost={data.cost}
          image={data.picture}
          type={data.type}
          units={data.units}
          addFunc={this.handleAddFunc.bind(this)}
        />
      </Col>
    ));
  }

  clickVeg = () => {
    this.setState(m => ({
      filter: 1
    }));
  };
  clickNonVeg = () => {
    this.setState(m => ({
      filter: 2
    }));
  };
  clickAll = () => {
    this.setState(m => ({
      filter: -1
    }));
  };

  render() {
    const size = this.state.size;

    const buttonStyle = {
      margin: "0 10px"
    };

    return (
      <div style={{ margin: "5vh 10vw" }}>
        <Row>
          <Col
            style={{
              backgroundColor: "white",
              minHeight: "10vh"
            }}
            xs={{ span: 22, offset: 1 }}
            lg={{ span: 22, offset: 1 }}
          >
            <h1 style={{ padding: "10px 30px" }}>CART:</h1>
            <div>
              {this.state.cart.map(cart => (
                <Row style={{ backgroundColor: "#80808073", margin: 15 }}>
                  <Col
                    xs={{ span: 22, offset: 1 }}
                    lg={{ span: 8, offset: 1 }}
                    style={{ padding: 10 }}
                  >
                    <p style={{ marginTop: "1em" }}>Item name: {cart.name}</p>
                  </Col>
                  <Col
                    xs={{ span: 22, offset: 1 }}
                    lg={{ span: 7, offset: 1 }}
                    style={{ padding: 10 }}
                  >
                    <p style={{ marginTop: "1em" }}>Units: x{cart.units}</p>
                  </Col>
                  <Col
                    xs={{ span: 22, offset: 1 }}
                    lg={{ span: 6, offset: 1 }}
                    style={{ padding: 10 }}
                  >
                    <p style={{ marginTop: "1em" }}>Cost: {cart.cost}</p>
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
          <Col
            style={{
              marginTop: "5vh"
            }}
            xs={{ span: 22, offset: 1 }}
            lg={{ span: 22, offset: 1 }}
          >
            <h1>Filters:</h1>
            <Button
              type="primary"
              size={size}
              onClick={this.clickAll}
              style={buttonStyle}
            >
              All
            </Button>
            <Button
              type="primary"
              size={size}
              onClick={this.clickVeg}
              style={buttonStyle}
            >
              Veg
            </Button>
            <Button
              type="primary"
              size={size}
              onClick={this.clickNonVeg}
              style={buttonStyle}
            >
              Non-Veg
            </Button>
          </Col>
          {this.addItems()}
        </Row>
      </div>
    );
  }
}

export default Grid;
